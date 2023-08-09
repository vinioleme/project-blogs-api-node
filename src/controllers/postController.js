const { postService } = require('../services');

 const mapStatusHTTP = require('../utils');

 const getAllThePosts = async (req, res) => {
   const { status, message } = await 
   postService.getAllThePosts();

   return res.status(mapStatusHTTP(status))
   .json(message);
 };

 module.exports = {
   getAllThePosts,
 };