const database = require('../config/database');
const dateFormat = require('date-and-time');
const createdAt = dateFormat.format(new Date(), 'YYYY-MM-DD');
// const updatedAt = dateFormat.format(new Date(), 'YYYY-MM-DD');

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

const create = async (farming) => {
  // console.log(farming);
  const {
    name,
    cnpj,
    owner,
    phone,
    zipcode,
    address,
    district,
    city,
    landmark,
    created_by,
  } = farming;

  const [ret] = await connection.execute(
    'INSERT INTO farmings (name, cnpj, owner, phone, zipcode, address, district, city, landmark, created_by, created_at) ' +
      'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
    [
      name,
      cnpj,
      owner,
      phone,
      zipcode,
      address,
      district,
      city,
      landmark,
      created_by,
      createdAt,
    ]
  );
  return { insertId: ret.insertId };
};

// const deleteFarming = async (id) => {
//   const q = 'DELETE FROM farmings WHERE id = ?';
//   const deletedFarming = await connection.execute(q, [id]);
//   return deletedFarming;
// };

// const updateFarming = async (id, farming) => {
//   const q = 'UPDATE farmings SET name = ? WHERE id = ?';
//   // 'UPDATE farmings SET name = ?, cnpj = ?, owner = ?, phone = ?, address = ? WHERE id = ?';
//   const { name } = farming;
//   // const { name, cnpj, owner, phone, address } = farming;

//   const [updatedFarming] = await connection.execute(q, [
//     name,
//     // cnpj,
//     // owner,
//     // phone,
//     // address,
//     id,
//   ]);
//   return updatedFarming;
// };

module.exports = {
  get,
  create,
  // deleteFarming,
  // updateFarming,
};
