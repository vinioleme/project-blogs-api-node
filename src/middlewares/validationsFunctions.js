const jwt = require('jsonwebtoken');

const validateCategories = (req, res, next) => {
    const { name } = req.body;
 
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
 
    next();
  };

  const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
 
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
 
    next();
  };

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

const verifyDn = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res
    .status(400).json({ message:
      '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;

  if (!email || !regex.test(email)) {
    return res
    .status(400).json({ 
      message: '"email" must be a valid email' });
  }

next();
};

const validPass = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ message:
      '"password" length must be at least 6 characters long' });
  }

next();
};

  module.exports = {
    validateCategories,
    validateLogin,
    validateToken,
    verifyDn,
    validEmail,
    validPass,
  };