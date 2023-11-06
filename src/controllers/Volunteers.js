const Model = require('../models/Volunteers');

const get = async (_req, res) => {
  const volunteers = await Model.get();

  if (volunteers.length === 0)
    return res.status(200).json('Nenhum Volunário cadastrado');

  return res.status(200).json({ volunteers });
};

const getById = async (req, res) => {
  const volunteer = await Model.getById(req.params.id);

  if (volunteer.length === 0)
    return res.status(200).json('Volunário não encontrado');

  return res.status(200).json({ volunteer });
};

const create = async (req, res) => {
  const volunteer = await Model.create(req.body);

  return res.status(201).json({ volunteer });
};

const update = async (req, res) => {
  const volunteer = await Model.update(req.param.id, req.body);

  return res.status(201).json({ volunteer });
};

const destroy = async (req, res) => {
  await Model.destroy(req.param.id, req.body.username);

  return res.status(201).json('Voluntário excluído com sucesso');
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
