
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, key: 'pulse', step: 'Put hand on wrist'},
        {id: 2, key: 'bleeding', step: 'Apply pressure'}

      ]);

      })
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps))`)
    });
};
