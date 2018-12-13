exports.up = function (knex, Promise) {
    return knex.schema.createTable('quotes', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments('id').primary()
        table.string('quote').notNullable()
        table.varchar('author', 255).notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('quotes')
}
