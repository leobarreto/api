const Model = require('../models/Farmings');

const get = async (_request, response) => {
  const farmings = await Model.get();

  return response.status(200).json({ farmings });
};

const create = async (request, response) => {
  const created = await Model.create(request.body);
  console.log(created);
  return response.status(200).json(created);
};

const destroy = async (request, response) => {
  const { id } = request.params;

  await Model.destroy(id);
  return response
    .status(200)
    .json({ message: 'Registro excluído com sucesso' });
};

const updateFarming = async (request, response) => {
  const { id } = request.params;

  await Model.updateFarming(id, request.body);
  return response.status(200).json({ message: 'Agro atualizada com sucesso!' });
};

module.exports = {
  get,
  create,
  destroy,
  updateFarming,
};
