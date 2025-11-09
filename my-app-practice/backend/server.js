import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ CONEXIÓN MONGODB LOCAL
const MONGO_URI = 'mongodb://localhost:27017/authapp';

// Conectar a MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Conectado a MongoDB Local'))
    .catch(err => {
        console.log('❌ Error conectando a MongoDB:', err.message);
        console.log('💡 Asegúrate de que MongoDB esté instalado y corriendo');
        console.log('💡 Puedes descargarlo desde: https://www.mongodb.com/try/download/community');
    });

// Rutas
app.use('/api', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Backend de autenticación funcionando!',
        database: 'MongoDB Local',
        connection: MONGO_URI
    });
});

// Ruta para debug (ver usuarios en la base de datos)
app.get('/api/debug/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🎯 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📊 MongoDB: ${MONGO_URI}`);
});