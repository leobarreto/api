const farmingsModel = require('../models/farmingsModel');

const get = async (_request, response) => {
  const farmings = await farmingsModel.get();

  return response.status(200).json({ farmings });
};

const create = async (request, response) => {
  const createdFarming = await farmingsModel.create(request.body);
  return response.status(200).json(createdFarming);
};

const deleteFarming = async (request, response) => {
  const { id } = request.params;

  await farmingsModel.deleteFarming(id);
  return response
    .status(200)
    .json({ message: 'Registro excluído com sucesso' });
};

const updateFarming = async (request, response) => {
  const { id } = request.params;

  await farmingsModel.updateFarming(id, request.body);
  return response.status(200).json({ message: 'Agro atualizada com sucesso!' });
};

module.exports = {
  get,
  create,
  deleteFarming,
  updateFarming,
};
