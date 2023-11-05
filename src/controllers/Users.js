const Model = require('../models/Users');

const get = async (_req, res) => {
  const users = await Model.get();

  return res.status(200).json({ users });
};

const create = async (req, res) => {
  const user = await Model.create(req.body);

  return res.status(201).json({ user });
};

const update = async (req, res) => {
  const user = await Model.update(req.params.id, req.body);

  return res.status(204).json({ user });
};

const destroy = async (req, res) => {
  await Model.destroy(req.params.id);

  return res.status(204).json('Usuário ecluído com sucesso');
};

module.exports = {
  get,
  create,
  update,
  destroy,
};
