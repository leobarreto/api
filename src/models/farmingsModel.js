const connection = require('./connection');

const getAll = async () => {
  const [farmings] = await connection.execute('SELECT id, name FROM farmings');
  return farmings;
};

const create = async (farming) => {
  const { name } = farming;
  const q = 'INSERT INTO farmings (name) VALUES (?)';
  const [createdFarming] = await connection.execute(q, [name]);

  return { insertId: createdFarming.insertId };
};

const deleteFarming = async (id) => {
  const q = 'DELETE FROM farmings WHERE id = ?';
  const deletedFarming = await connection.execute(q, [id]);
  return deletedFarming;
};

const updateFarming = async (id, farming) => {
  const q = 'UPDATE farmings SET name = ? WHERE id = ?';
  // 'UPDATE farmings SET name = ?, cnpj = ?, owner = ?, phone = ?, address = ? WHERE id = ?';
  const { name } = farming;
  // const { name, cnpj, owner, phone, address } = farming;

  const [updatedFarming] = await connection.execute(q, [
    name,
    // cnpj,
    // owner,
    // phone,
    // address,
    id,
  ]);
  return updatedFarming;
};

module.exports = {
  getAll,
  create,
  deleteFarming,
  updateFarming,
};
