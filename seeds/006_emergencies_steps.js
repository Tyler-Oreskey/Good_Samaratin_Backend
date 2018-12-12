
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emergencies_procedures').del()
    .then(function () {
      // Inserts seed entries
      return knex('emergencies_procedures').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`emergencies_procedures_id_seq`, (SELECT MAX(id) FROM emergencies_procedures))`)
      })
    });
};