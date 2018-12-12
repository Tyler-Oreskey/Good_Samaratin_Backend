exports.up = function (knex, Promise) {
    return knex.schema.createTable('users_quizzes', (table) => {
        table.increments().primary()
        table.integer('user_id').notNullable()
        table.integer('quiz_id').notNullable()
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.foreign('quiz_id').references('quizzes.id').onDelete('CASCADE')
        table.timestamps(true, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users_quizzes')

};
