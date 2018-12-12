
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, fname: 'Tyler', lname: 'Oreskey', quiz_points: 0},
      ]);

      })
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
    });
};
