import { supabase } from '@/lib/supabase';
import bcrypt from 'bcrypt';

// Desactiva el bodyParser de Next.js para usar un parseo manual
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    // Leer el cuerpo manualmente (por si Next.js no lo hace)
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    console.log('REQ BODY:', body);

    const { nombre_usuario, correo_electronico, contrasena } = body;

    if (!nombre_usuario || !correo_electronico || !contrasena) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const { data, error } = await supabase
      .from('usuarios')
      .insert([
        {
          nombre_usuario,
          correo_electronico,
          contrasena: hashedPassword,
        },
      ])
      .select();

    if (error) {
      console.error('Error Supabase:', error);
      return res.status(500).json({
        message: 'Error al crear el usuario',
        supabaseError: error.message || error.details || error,
      });
    }

    return res.status(201).json({
      message: 'Usuario creado con éxito',
      user: data[0],
    });
  } catch (err) {
    console.error('Error general:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}