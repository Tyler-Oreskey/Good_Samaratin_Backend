exports.up = function (knex, Promise) {
    return knex.schema.createTable(`users`, function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments().notNullable().primary()
        table.varchar('fname', 255).notNullable()
        table.varchar('lname', 255).notNullable()
        table.integer('quiz_points').defaultTo(0)
        table.timestamps(true, true)
    })
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(`users`)
}
