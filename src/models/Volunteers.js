const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const volunteers = await database('volunteers')
    .where({ active: 1 })
    .select(
      'id',
      'name',
      'cpf',
      'phone',
      'volunteer_start_date',
      'zipcode',
      'address',
      'district',
      'city',
      'landmark'
    );
  return volunteers;
};

const getById = async (id) => {
  const volunteer = await database('volunteers')
    .where({ id: id, active: 1 })
    .select(
      'id',
      'name',
      'cpf',
      'phone',
      'volunteer_start_date',
      'zipcode',
      'address',
      'district',
      'city',
      'landmark'
    );

  return volunteer;
};

const create = async (req) => {
  const volunteer = await database('volunteers').insert({
    name: req.name,
    cpf: req.cpf,
    phone: req.phone,
    volunteer_start_date: req.volunteer_start_date,
    zipcode: req.zipcode,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    created_at: created_at,
    created_by: req.created_by,
    active: 1,
  });

  return volunteer;
};

const update = async (id, req) => {
  const volunteer = await database('volunteers').where('id', id).update({
    name: req.name,
    cpf: req.cpf,
    phone: req.phone,
    volunteer_start_date: req.volunteer_start_date,
    zipcode: req.zipcode,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    updated_at: updated_at,
    updated_by: req.updated_by,
  });

  return volunteer;
};

const destroy = async (id, username) => {
  await database('volunteers').where('id', id).update({
    active: 0,
    updated_at: updated_at,
    updated_by: username,
  });
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
