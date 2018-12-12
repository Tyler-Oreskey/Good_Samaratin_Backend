
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_quizzes').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_quizzes').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`users_quizzes_id_seq`, (SELECT MAX(id) FROM users_quizzes))`)
      })
    });
};
