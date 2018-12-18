
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, key: 'Call 911', step: 'Call the proper authorities to make sure help is on the way'},
        {id: 2, key: 'Check for Breath', step: 'Put 2 fingers under nose to see if there is breath.'},
        {id: 3, key: 'Check for External Injury', step: 'Make sure the patient is not bleeding'},
        {id: 4, key: 'Place on Hard Surface', step: 'Put patient on back on hard surface.'},
        {id: 5, key: 'Perform CPR', step: 'Being check compressions at 30 in a row, then mouth to mouth twice.'}
      ]);

      })
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps))`)
    });
};
