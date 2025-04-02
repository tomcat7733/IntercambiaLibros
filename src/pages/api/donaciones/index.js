import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { isbn, usuario_id, mensaje } = req.body;

    if (!isbn || !usuario_id) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const { data, error } = await supabase
      .from('donaciones')
      .insert([{ isbn, usuario_id, mensaje }])
      .select();

    if (error) return res.status(500).json({ error: error.message });

    return res.status(201).json({ message: 'Donación registrada', donacion: data[0] });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('donaciones')
      .select('*, usuarios(nombre_usuario), libros(titulo, autor, imagenes)');

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(data);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Falta el ID de la donación a eliminar' });
    }

    const { error } = await supabase
      .from('donaciones')
      .delete()
      .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ message: 'Donación eliminada' });
  }

  return res.status(405).json({ message: 'Método no permitido' });
}