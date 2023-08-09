const { User } = require('../models');

 const getUser = async (displayName, email, password, image) => {
   const userEmail = await User
   .findOne({ 
    where: { email } });

   if (userEmail) {
     return ({ 
        status: 'CONFLICT', 
        message: 'User already registered' });
   }

   const createUser = await User.create({ 
    displayName, email, password, image });

   return { 
    status: 'CREATED', 
    message: createUser.dataValues };
 };

 const getAllTheUsers = async () => {
    const allUsers = await User.findAll({
      attributes: 
      { exclude: ['password'] },
    });
 
    return { 
      status: 'SUCCESSFUL', message: allUsers };
  };

  const getUsersById = async (id) => {
    const usersId = await User.findOne({
         where: { id }, 
         attributes: { exclude: ['password'] } });
 
    if (!usersId) {
      return { 
        status: 'NOT_FOUND', 
        message: 'User does not exist' };
    }
 
    return { 
        status: 'SUCCESSFUL', 
        message: usersId.dataValues };
  };

 module.exports = {
   getUser,
   getAllTheUsers,
   getUsersById,
 }; 