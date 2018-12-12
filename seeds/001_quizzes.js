
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quizzes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quizzes').insert([
        {id: 1, question: 'You find a person who is unresponsive and not breathing, what is the first thing you should do?', wrong_answer_one: 'Check for a pulse.', wrong_answer_two: 'Start CPR.', correct_answer: 'Call 911.', wrong_answer_three: 'Check for ID.', description: 'basic quiz', type:''},
        {id: 2, question: 'Your best friend is chowing down on a bratwurst, when he/she grabs his neck and starts hacking, you know they’re is choking, what is the first thing you should do?', wrong_answer_one: 'Try to pull the bratwurst out of their throat.', wrong_answer_two: 'Try to burp him/her.', wrong_answer_three: 'Give him/her some water.', correct_answer: 'Perform the Heimlich maneuver.', description: 'basic quiz', type:''},
      ]);
      .then(function() {
         //Moves id column (PK) auto-incremented to correct value after inserts
        return knex.raw(`SELECT setval(`quizzes_id_seq`, (SELECT MAX(id) FROM quizzes))`)
      })
    });
};
