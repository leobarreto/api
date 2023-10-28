const connection = require('../config/connection');
const dateFormat = require('date-and-time');
const createdAt = dateFormat.format(new Date(), 'YYYY-MM-DD');
const updatedAt = dateFormat.format(new Date(), 'YYYY-MM-DD');

const read = async (tableName, fields) => {
  const [ret] = await connection.execute(`SELECT ${fields} FROM ${tableName};`);

  return ret;
};

const save = async (tableName, fields, values) => {
  fields = fields.concat(', created_at');
  values = values.concat(`, '${createdAt}'`);
  // console.log(values);
  const [ret] = await connection.execute(
    `INSERT into ${tableName} (${fields}) VALUES (${values});`
  );

  return ret;
};

const update = async () => {
  return console.log();
};

module.exports = {
  read,
  save,
  update,
};
