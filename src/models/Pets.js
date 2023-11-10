const database = require('../config/database');
const dateFormat = require('date-and-time');
const created_at = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updated_at = dateFormat.format(new Date(), 'YYYY-MM-DD');

const get = async () => {
  const pets = await database('pets')
    .where({ active: 1 })
    .select('rescue_date', 'name', 'age', 'gender', 'specie', 'breed');

  return pets;
};

const getById = async (id) => {
  const pet = database('pets')
    .where({ id: id, active: 1 })
    .select('rescue_date', 'name', 'age', 'gender', 'specie', 'breed');

  return pet;
};

const create = async (req) => {
  const pet = await database('pets').insert({
    rescue_date: req.rescue_date,
    name: req.name,
    age: req.age,
    gender: req.gender,
    specie: req.specie,
    breed: req.breed,
    weight: req.weight,
    weight_date: req.weight_date,
    character: req.character,
    castrated: req.castrated,
    vac_v8_dose1: req.vac_v8_dose1,
    vac_v8_dose2: req.vac_v8_dose2,
    vac_v8_dose3: req.vac_v8_dose3,
    vac_v8_next_dose: req.vac_v8_next_dose,
    vac_antirage: req.vac_antirage,
    vac_antirage_next_dose: req.vac_antirage_next_dose,
    vermifuge_dose1: req.vermifuge_dose1,
    vermifuge_dose2: req.vermifuge_dose2,
    vermifuge_dose3: req.vermifuge_dose3,
    vermifuge_next_dose: req.vermifuge_next_dose,
    antiparasitic: req.antiparasitic,
    antiparasitic_next_dose: req.antiparasitic_next_dose,
    diseases: req.diseases,
    feed_month: req.feed_month,
    type_feed: req.type_feed,
    created_at: created_at,
    created_by: req.created_by,
    active: 1,
  });

  return pet;
};

const update = (id, req) => {
  const pet = database('pets').where({ id: id }).update({
    rescue_date: req.rescue_date,
    name: req.name,
    age: req.age,
    gender: req.gender,
    specie: req.specie,
    breed: req.breed,
    weight: req.weight,
    weight_date: req.weight_date,
    character: req.character,
    castrated: req.castrated,
    vac_v8_dose1: req.vac_v8_dose1,
    vac_v8_dose2: req.vac_v8_dose2,
    vac_v8_dose3: req.vac_v8_dose3,
    vac_v8_next_dose: req.vac_v8_next_dose,
    vac_antirage: req.vac_antirage,
    vac_antirage_next_dose: req.vac_antirage_next_dose,
    vermifuge_dose1: req.vermifuge_dose1,
    vermifuge_dose2: req.vermifuge_dose2,
    vermifuge_dose3: req.vermifuge_dose3,
    vermifuge_next_dose: req.vermifuge_next_dose,
    antiparasitic: req.antiparasitic,
    antiparasitic_next_dose: req.antiparasitic_next_dose,
    diseases: req.diseases,
    feed_month: req.feed_month,
    type_feed: req.type_feed,
    updated_at: updated_at,
    updated_by: req.updated_by,
  });

  return pet;
};

const destroy = async (id, username) => {
  await database('pets').where({ id: id }).update({
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
