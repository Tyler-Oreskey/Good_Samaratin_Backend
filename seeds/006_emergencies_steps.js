
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emergencies_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('emergencies_steps').insert([
        {id: 1, emergency_id: 'yeeeeet', steps_id: 'yeeet'},
      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`emergencies_steps_id_seq`, (SELECT MAX(id) FROM emergencies_steps))`)
      })
    });
};
