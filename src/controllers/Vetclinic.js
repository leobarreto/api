const Model = require('../models/Model');

const get = async (_req, res) => {
  const vetclinics = await Model.get();

  if (vetclinics.length === 0)
    return res.status(200).json('Nenhuma Clínica Veterinária cadastrada');

  return res.status(200).json({ vetclinics });
};

const getById = async (req, res) => {
  const vetclinic = await Model.getById(req.params.id);

  if (vetclinic.length === 0)
    return res.status(201).json('Clínica Veterinária não encontrada');

  return res.status(200).json({ vetclinic });
};

const create = async (req, res) => {
  const vetclinic = await Model.create(req.body);

  return res.status(200).json({ vetclinic });
};

const update = async (req, res) => {
  const vetclinic = await Model.update(req.params.id, req.body);

  return res.status(200).json({ vetclinic });
};

const destroy = async (req, res) => {
  await Model.destroy(req.params.id);

  return res.status(204).json('Clínica Veterinária excluída com sucesso');
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
