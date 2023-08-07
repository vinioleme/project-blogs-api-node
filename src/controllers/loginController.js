const jwt = require('jsonwebtoken');
 const { loginService } = require('../services');
 const mapStatusHTTP = require('../utils');

 const jwtSecret = process.env.JWT_SECRET;

 const configurations = {
   algorithm: 'HS256', 
 };

 const token = (result) => jwt
 .sign(result, jwtSecret, configurations);

 const updateLogin = async (req, res) => {
   const { email, password } = req.body;

   const { status, message } = await 
   loginService.updateLogin(email, password);

   if (status === 'INVALID_USER') {
     return res
     .status(mapStatusHTTP(status))
     .json({ message });
   }

   const payload = {
     email: message.email,
     id: message.id,
   };

   const tokenUser = token(payload);

   return res
   .status(mapStatusHTTP(status))
   .json({ token: tokenUser });
 };

 module.exports = {
   updateLogin,
 };