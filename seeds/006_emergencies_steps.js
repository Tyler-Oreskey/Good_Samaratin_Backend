
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emergencies_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('emergencies_steps').insert([
        {id: 1, emergency_id: 5, steps_id: 1},
        {id: 2, emergency_id: 5, steps_id: 2},
        {id: 3, emergency_id: 5, steps_id: 3},
        {id: 4, emergency_id: 5, steps_id: 4},
        {id: 5, emergency_id: 5, steps_id: 5},
      ]);
    })
    .then(function() {
       //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('emergencies_steps_id_seq', (SELECT MAX(id) FROM emergencies_steps))`)
    });
};
