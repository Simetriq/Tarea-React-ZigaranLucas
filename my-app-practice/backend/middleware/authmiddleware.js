import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mi-secreto-super-seguro';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      error: 'Token de acceso requerido' 
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        success: false, 
        error: 'Token inválido o expirado' 
      });
    }

    req.userId = decoded.userId;
    next();
  });
};

