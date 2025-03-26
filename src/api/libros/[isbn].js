import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  const { isbn } = req.query;

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .eq('isbn', isbn)
      .single();

    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ message: 'Método no permitido' });
}