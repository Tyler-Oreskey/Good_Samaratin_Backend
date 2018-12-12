exports.up = function (knex, Promise) {
    return knex.schema.createTable('emergencies_steps', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments('id').primary()
        table.varchar('emergency_id').notNullable()
        table.varchar('steps_id', 255).notNullable()
        table.int(sort())
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('emergencies_steps')
}