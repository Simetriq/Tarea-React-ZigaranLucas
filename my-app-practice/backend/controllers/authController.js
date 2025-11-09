import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mi-secreto-super-seguro';

const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

// Registrar usuario
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email y contraseña son requeridos'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                error: 'La contraseña debe tener al menos 6 caracteres'
            });
        }

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'El usuario ya existe'
            });
        }

        // ✅ Crear usuario SIN encriptación
        const user = new User({ email, password });
        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Usuario registrado exitosamente',
            token,
            user: { email: user.email }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error en el servidor: ' + error.message
        });
    }
};

// Login de usuario
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email y contraseña son requeridos'
            });
        }

        // Buscar usuario
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Credenciales incorrectas'
            });
        }

        // ✅ Comparación DIRECTA (sin encriptación)
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                error: 'Credenciales incorrectas'
            });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            message: 'Login exitoso',
            token,
            user: { email: user.email }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error en el servidor: ' + error.message
        });
    }
};

// Obtener perfil del usuario
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'Usuario no encontrado'
            });
        }

        res.json({
            success: true,
            user: { email: user.email }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error en el servidor: ' + error.message
        });
    }
};