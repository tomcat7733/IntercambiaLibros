import formidable from 'formidable';
import { supabase } from '@/lib/supabase';
import fs from 'fs';

// Con esta API, al subir un libro podemos hacerlo con todos los datos y una imagen.

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const form = new formidable.IncomingForm({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Error al procesar el formulario' });

    const { isbn, titulo, autor, categoria, descripcion, usuario_id, estado_libro, donacion, ubicacion } = fields;
    const imagen = files.imagen;

    if (!isbn || !titulo || !usuario_id || !imagen) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    // Leer imagen
    const fileData = fs.readFileSync(imagen.filepath);
    const fileName = `libros/${Date.now()}_${imagen.originalFilename}`;

    // Subir a Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('portadas')
      .upload(fileName, fileData, {
        contentType: imagen.mimetype,
        upsert: false,
      });

    if (uploadError) {
      console.error(uploadError);
      return res.status(500).json({ message: 'Error al subir imagen' });
    }

    const { data: publicUrl } = supabase.storage.from('portadas').getPublicUrl(fileName);

    // Insertar libro en la base de datos
    const { error: insertError } = await supabase.from('libros').insert({
      isbn,
      titulo,
      autor,
      categoria,
      descripcion,
      estado_libro,
      donacion: donacion === 'true',
      ubicacion,
      imagenes: publicUrl.publicUrl,
      usuario_id,
      estado_intercambio: 'disponible',
      es_de_catalogo: false
    });

    if (insertError) {
      return res.status(500).json({ message: 'Error al guardar el libro', supabaseError: insertError.message });
    }

    return res.status(201).json({ message: 'Libro registrado con éxito' });
  });
}