const { Category } = require('../models');

 const postCategories = async (name) => {
   const createCategory = await Category.create({ name });

   return { 
    status: 'CREATED', 
    message: createCategory.dataValues };
 };

 const getAllCategories = async () => {
    try {
      const findCategories = await Category.findAll();
      
      const dataCategories = findCategories.map((category) => {
        const { id, name, description } = category;
        return { id, name, description };
      });
  
      return { 
        status: 'SUCCESSFUL', 
        message: dataCategories };
    } catch (error) {
      return { 
        status: 'ERROR', 
        message: 'Failed to retrieve categories.' };
    }
  };

 module.exports = {
   postCategories,
   getAllCategories,
 };