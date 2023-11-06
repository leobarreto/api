const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const users = await database('users')
    .where({ active: 1 })
    .select('id', 'name', 'email', 'username');

  return users;
};

const getById = async (id) => {
  const user = await database('users')
    .where({ id: id, active: 1 })
    .select('id', 'name', 'email', 'username');
  return user;
};

const create = async (req) => {
  const user = await database('users').insert({
    name: req.name,
    email: req.email,
    username: req.username,
    pwd: req.pwd,
    created_at: created_at,
    active: 1,
  });
  return user;
};

const update = async (id, req) => {
  const user = await database('users').where({ id: id }).update({
    name: req.name,
    email: req.email,
    username: req.username,
    pwd: req.pwd,
    updated_at: updated_at,
    updated_by: req.updated_by,
  });
  return user;
};

const destroy = async (id) => {
  return await database('users').where({ id: id }).update({
    active: 0,
    updated_at: updated_at,
  });
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
