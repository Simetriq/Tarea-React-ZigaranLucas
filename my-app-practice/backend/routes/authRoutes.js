import express from 'express';
import { register, login, getProfile } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authmiddleware.js';

const router = express.Router();

// Rutas públicas
router.post('/register', register);
router.post('/login', login);

// Ruta protegida
router.get('/profile', authenticateToken, getProfile);

// ✅ AGREGA ESTA LÍNEA
export default router;