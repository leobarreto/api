const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const vetclinics = await database('vet_clinic')
    .where({ active: 1 })
    .select(
      'id',
      'name',
      'owner',
      'cnpj',
      'vet',
      'phone',
      'zipcode',
      'address',
      'district',
      'city',
      'landmark'
    );

  return vetclinics;
};

const getById = async (id) => {
  const vetclinic = (await database('vet_clinic'))
    .where({ id: id, active: 1 })
    .select(
      'id',
      'name',
      'owner',
      'cnpj',
      'vet',
      'phone',
      'zipcode',
      'address',
      'district',
      'city',
      'landmark'
    );

  return vetclinic;
};

const create = async (req) => {
  const vetclinic = await database('vet_clinic').insert({
    name: req.name,
    owner: req.owner,
    cnpj: req.cnpj,
    vet: req.vet,
    phone: req.phone,
    zipcode: req.zipcode,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    active: 1,
    created_at: created_at,
    created_by: req.created_by,
  });

  return vetclinic;
};

const update = async (id, req) => {
  const vetclinic = await database('vet_clinic').where({ id: id }).update({
    name: req.name,
    owner: req.owner,
    cnpj: req.cnpj,
    vet: req.vet,
    phone: req.phone,
    zipcode: req.zipcode,
    address: req.address,
    district: req.district,
    city: req.city,
    landmark: req.landmark,
    updated_at: updated_at,
    updated_by: req.updated_by,
  });
  return vetclinic;
};

const destroy = async (id, username) => {
  const vetclinic = await database('vet_clinic').where({ id: id }).update({
    active: 0,
    updated_at: updated_at,
    updated_by: username,
  });
  return vetclinic;
};

module.exports = {
  get,
  getById,
  create,
  update,
  destroy,
};
