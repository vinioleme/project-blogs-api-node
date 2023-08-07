const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    let tokenVerify = authorization;
    if (authorization.includes(' ')) {
      const token = authorization.split(' ')[1];
      tokenVerify = token;
    }

    const result = jwt.verify(tokenVerify, secret);

    req.user = result;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
