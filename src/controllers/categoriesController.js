const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils');

const postCategories = async (req, res) => {
  const { name } = req.body;

  const { status, message } = await categoriesService.postCategories(name);

  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  postCategories,
};