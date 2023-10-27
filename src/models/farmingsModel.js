const q = require('../repositories/queries');
// const connection = require('../config/connection');

// const getAll = async () => {
//   const [farmings] = await connection.execute('SELECT id, name FROM farmings');
//   return farmings;
// };

const get = () => {
  const farmings = q.read('farmings', 'id, name, cnpj, owner, phone, address');
  return farmings;
};

const create = async (farming) => {
  // console.log(farming);
  const { name, cnpj, owner, phone, address, neighborhood } = farming;
  const values = `'${name}', '${cnpj}', '${owner}', '${phone}', '${address}', '${neighborhood}'`;
  const ret = q.save(
    'farmings',
    'name, cnpj, owner, phone, address, neighborhood',
    values
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
