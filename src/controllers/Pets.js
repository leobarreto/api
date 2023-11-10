const Model = require('../models/Model');

const get = async (req, res) => {
  const pets = await Model.get();

  if (pets.length === 0)
    return res.status(200).json('Não existem animais cadastrados');

  return res.status(200).json({ pets });
};

const getById = async (req, res) => {
  const pet = await Model.getById(req.params.id);

  if (pet.length === 0) return res.status(200).json('Nenhum animal encontrado');

  return res.status(200).json({ pet });
};

const create = async (req, res) => {
  const pet = await Model.create(req.body);

  return res.status(200).json({ pet });
};

const update = async (req, res) => {
  const pet = await Model.update(req.params.id, req.body);

  if (pet.length === 0) return res.status(204).json('Nenhum animal atualizado');

  return res.status(200).send('Animal atualizado com sucesso');
};

const destroy = async (req, res) => {
  await Model.delete(req.params.id, req.body.username);

  return res.status(200).send('Animal excluído com sucesso');
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
