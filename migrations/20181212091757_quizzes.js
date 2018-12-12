exports.up = function(knex, Promise) {
  return knex.schema.createTable('quizzes', (table) => {
      table.increments().primary()
      table.string('question').notNullable()
      table.varchar('correct_answer', 255).notNullable()
      table.varchar('wrong_answer_one', 255).notNullable()
      table.varchar('wrong_answer_two', 255).notNullable()
      table.varchar('wrong_answer_three', 255).notNullable()
      table.string('description').notNullable()
      table.varchar('type', 255)
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quizzes')
}
