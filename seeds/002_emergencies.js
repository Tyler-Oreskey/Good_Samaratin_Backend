
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emergencies').del()
    .then(function () {
      // Inserts seed entries
      return knex('emergencies').insert([
        {id: 1, emergency_name: 'Cut', emergency_type: 'Injury'},
        {id: 2, emergency_name: 'Unresponsive', emergency_type: 'Injury'},
        {id: 3, emergency_name: 'First Degree Burn', emergency_type: 'Injury'},
        {id: 4, emergency_name: 'Snake Bite', emergency_type: 'Injury'},
        {id: 5, emergency_name: 'Heart Attack', emergency_type: 'Injury'},
        {id: 6, emergency_name: 'Broken Arm', emergency_type: 'Injury'},
        {id: 7, emergency_name: 'Seizure', emergency_type: 'Injury'},
        {id: 8, emergency_name: 'Choking', emergency_type: 'Injury'},
        {id: 9, emergency_name: 'Electrocution', emergency_type: 'Injury'},
      ]);
    })
    .then(function() {
       //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('emergencies_id_seq', (SELECT MAX(id) FROM emergencies))`)
    })
};
