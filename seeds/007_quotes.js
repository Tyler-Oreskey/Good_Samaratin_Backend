exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1,
          quote: 'Wherever the art of Medicine is loved, there is also a love of Humanity.',
          author: 'Hippocrates'
        }, {
          id: 2,
          quote: 'As a caregiver, you see selfless acts everyday.',
          author: 'Dr. Raj Panjabi'
        }, {
          id: 3,
          quote: 'In nothing do men more nearly approach the gods than in giving health to men.',
          author: 'Cicero'
        }, {
          id: 4,
          quote: 'People pay the doctor for his trouble; for his kindness they still remain in his debt.',
          author: 'Seneca'
        }
      ]);

      })
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps))`)
    });
};
