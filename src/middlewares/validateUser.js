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
    verifyDn,
    validEmail,
    validPass,
  };