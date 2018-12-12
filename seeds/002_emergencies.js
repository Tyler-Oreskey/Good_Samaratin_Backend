
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emergencies').del()
    .then(function () {
      // Inserts seed entries
      return knex('emergencies').insert([
        {id: 1, emergency_name: '1', emergency_type: ''},
        {id: 2, emergency_name: '2', emergency_type: ''},
        {id: 3, emergency_name: '3', emergency_type: ''},
        {id: 4, emergency_name: '4', emergency_type: ''},
        {id: 5, emergency_name: '5', emergency_type: ''},
        {id: 6, emergency_name: '6', emergency_type: ''},
        {id: 7, emergency_name: '7', emergency_type: ''},
        {id: 8, emergency_name: '8', emergency_type: ''},
        {id: 9, emergency_name: '9', emergency_type: ''},

      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`emergencies_id_seq`, (SELECT MAX(id) FROM emergencies))`)
      })
    });
};
