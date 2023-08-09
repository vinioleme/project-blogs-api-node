const jwt = require('jsonwebtoken');
 const { userService } = require('../services');
 const mapStatusHTTP = require('../utils');

 const jwtSecret = process.env.JWT_SECRET;
 const configuration = {
   algorithm: 'HS256',
   expiresIn: '1d',
 };

 const token = (result) => jwt.sign(result, jwtSecret, configuration);

 const getUser = async (req, res) => {
   const { displayName, email, password, image } = req.body;

   const { status, message } = await userService.getUser(displayName, email, password, image);

   if (status === 'CONFLICT') {
     return res.status(mapStatusHTTP(status)).json({ message });
   }

   const payload = {
     email: message.email,
     id: message.id,
   };

   const tokenUser = token(payload);

   return res.status(mapStatusHTTP(status)).json({ token: tokenUser });
 };

 const getAllTheUsers = async (req, res) => {
    const { status, message } = await 
    userService.getAllTheUsers();
 
    return res
    .status(mapStatusHTTP(status)).json(message);
  };

  const getUsersById = async (req, res) => {
    const { id } = req.params;
    const { status, message } = await userService.getUsersById(id);
 
    if (status === 'NOT_FOUND') {
      return res.status(mapStatusHTTP(status)).json({ message });
    }
 
    return res.status(mapStatusHTTP(status)).json(message);
  };

 module.exports = {
   getUser,
   getAllTheUsers,
   getUsersById,
 };