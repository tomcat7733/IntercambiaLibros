import { supabase } from '@/lib/supabase';

// Con esta API podemos manejar libro por libro sin tener que manejarlos todos a la vez


export default async function handler(req, res) {
  const { isbn } = req.query;

  if (!isbn) return res.status(400).json({ message: 'Falta el ISBN' });

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .eq('isbn', isbn)
      .single();

    if (error) return res.status(404).json({ message: 'Libro no encontrado', supabaseError: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const {
      titulo,
      autor,
      categoria,
      estado_libro,
      descripcion,
      donacion,
      ubicacion,
      imagenes,
      estado_intercambio,
      valoracion_del_libro
    } = req.body;

    const updateData = {
      titulo,
      autor,
      categoria,
      estado_libro,
      descripcion,
      donacion,
      ubicacion,
      imagenes,
      estado_intercambio,
      valoracion_del_libro
    };

    // Eliminar campos undefined
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined) delete updateData[key];
    });

    const { error } = await supabase
      .from('libros')
      .update(updateData)
      .eq('isbn', isbn);

    if (error) return res.status(500).json({ message: 'Error al actualizar libro', supabaseError: error.message });
    return res.status(200).json({ message: 'Libro actualizado con éxito' });
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('libros')
      .delete()
      .eq('isbn', isbn);

    if (error) return res.status(500).json({ message: 'Error al eliminar libro', supabaseError: error.message });
    return res.status(200).json({ message: 'Libro eliminado con éxito' });
  }

  return res.status(405).json({ message: 'Método no permitido' });
}