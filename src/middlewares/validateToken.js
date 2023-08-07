const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenVerify = authorization.split(' ')[1];

  let result;
  try {
    result = jwt.verify(tokenVerify, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = result;
  next();
};

module.exports = validateToken;
