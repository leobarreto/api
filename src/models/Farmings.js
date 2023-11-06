const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const farmings = await database
    .select(
      'id',
      'name',
      'cnpj',
      'owner',
      'phone',
      'zipcode',
      'address',
      'district',
      'city',
      'landmark'
    )
    .from('farmings');

  return farmings;
};

const getById = async (id) => {
  const farming = await database('farmings')
    .where('id', id)
    .select('id', 'name', 'email', 'username');
  return farming;
};

const create = async (req) => {
  const farming = await database('farmings').insert({
    name: req.name,
    cnpj: req.cnpj,
    owner: req.owner,
    phone: req.phone,
    zipcode: req.zipcode,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    created_at: created_at,
    created_by: req.created_by,
  });

  return farming;
};

const update = async (id, req) => {
  const farming = await database('farmings').where({ id: id }).update({
    name: req.name,
    cnpj: req.cnpj,
    owner: req.owner,
    phone: req.phone,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    updated_at: updated_at,
  });

  return farming;
};

const destroy = async (id) => {
  return await database('farmings').where({ id: id }).del();
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
