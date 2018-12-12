
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, key: '', step: ''},
        {id: 2, key: '', step: ''}

      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`steps_id_seq`, (SELECT MAX(id) FROM steps))`)
      })
    });
};
