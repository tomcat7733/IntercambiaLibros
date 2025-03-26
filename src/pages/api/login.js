import { supabase } from '@/lib/supabase';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { correo_electronico, contrasena } = req.body;
  console.log('Intentando login con:', correo_electronico);

  if (!correo_electronico || !contrasena) {
    console.log('Campos vacíos');
    return res.status(400).json({ message: 'Correo y contraseña obligatorios' });
  }

  try {
    // 1. Buscar usuario
    const { data: usuarios, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('correo_electronico', correo_electronico);

    console.log('🔎 Resultado de búsqueda:', usuarios);
    if (error) {
      console.error('Error al buscar usuario:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (!usuarios || usuarios.length === 0) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    const usuario = usuarios[0];

    // 2. Comparar contraseña
    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    console.log('Contraseña válida:', esValida);

    if (!esValida) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    // 3. Usuario autenticado
    console.log('Inicio de sesión correcto para:', usuario.nombre_usuario);

    return res.status(200).json({
      message: 'Inicio de sesión correcto',
      user: {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        correo_electronico: usuario.correo_electronico,
      },
    });
  } catch (err) {
    console.error('Error general en login:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}