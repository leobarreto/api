const Model = require('../models/Farmings');

const get = async (_req, res) => {
  const farmings = await Model.get();

  if (farmings.length === 0)
    return res.status(200).json('Nenhuma Agropecuária cadastrada');

  return res.status(200).json({ farmings });
};

const getById = async (req, res) => {
  const farming = await Model.getById(req.params.id);

  if (farming.length === 0)
    return res.status(200).json('Nenhuma Agropecuária encontrada');

  return res.status(200).json({ farming });
};

const create = async (req, res) => {
  const farming = await Model.create(req.body);

  return res.status(200).json(farming);
};

const destroy = async (req, res) => {
  await Model.destroy(req.params.id, req.body.username);

  return res.status(200).json('Agropecuária excluída com sucesso');
};

const update = async (req, res) => {
  await Model.update(req.params.id, req.body);

  return res.status(200).json('Cadastro atualizado com sucesso');
};

module.exports = {
  get,
  getById,
  create,
  destroy,
  update,
};
