const { User } = require('../models');

 const updateLogin = async (email, password) => {
   const userLogin = await User
   .findOne(
    { where: { email, password } },
);

   if (!userLogin) {
     return ({ 
      status: 'INVALID_USER', 
      message: 'Invalid fields' });
   }

   return { 
    status: 'SUCCESSFUL', 
    message: userLogin.dataValues };
 };

 module.exports = {
   updateLogin,
 };