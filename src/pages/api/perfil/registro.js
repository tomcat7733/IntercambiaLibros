import { supabase } from '@/lib/supabase';
import bcrypt from 'bcrypt';

// Desactivamos el bodyParser de Next.js para leer el body manualmente
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
    // Leemos el cuerpo manualmente
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    const {
      nombre_usuario,
      correo_electronico,
      contrasena,
      ubicacion = '',
      biografia = ''
    } = body;

    // Validación de campos obligatorios
    if (!nombre_usuario || !correo_electronico || !contrasena) {
      return res.status(400).json({ message: 'Nombre, correo y contraseña son obligatorios' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('usuarios')
      .insert([{
        nombre_usuario,
        correo_electronico,
        contrasena: hashedPassword,
        ubicacion,
        biografia,
        fecha_registro: new Date().toISOString(),
        reputacion: 0, // Valor por defecto
      }])
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