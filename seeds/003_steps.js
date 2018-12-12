
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('procedures').del()
    .then(function () {
      // Inserts seed entries
      return knex('procedures').insert([
        {id: 1, emergency_name: ''},
        {id: 1, procedure: 'rowValue1'},
        {id: 1, procedure: 'rowValue1'},
        {id: 1, procedure: 'rowValue1'},
        {id: 1, procedure: 'rowValue1'},
      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`procedures_id_seq`, (SELECT MAX(id) FROM procedures))`)
      })
    });
};
