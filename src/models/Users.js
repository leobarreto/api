const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const users = await database
    .select('id', 'name', 'email', 'username')
    .from('users');

  return users;
};

const create = async (req) => {
  const user = await database('users').insert({
    name: req.name,
    email: req.email,
    username: req.username,
    pwd: req.pwd,
    created_at: created_at,
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
  });
  return user;
};

const destroy = async (id) => {
  return await database('users').where({ id: id }).del();
};

module.exports = {
  get,
  create,
  update,
  destroy,
};
