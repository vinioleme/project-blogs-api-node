const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils');

const postCategories = async (req, res) => {
  const { name } = req.body;

  const { status, message } = await categoriesService.postCategories(name);

  return res.status(mapStatusHTTP(status)).json(message);
};

const getAllCategories = (req, res) => {
    categoriesService
      .getAllCategories()
      .then(({ status, message }) => {
        const statusCode = mapStatusHTTP(status);
        return res.status(statusCode).json(message);
      })
      .catch((error) => {
        const statusCode = mapStatusHTTP('error'); // Defina o status de erro adequado
        return res.status(statusCode).json({ error: error.message });
      });
  };

module.exports = {
  postCategories,
  getAllCategories,
};