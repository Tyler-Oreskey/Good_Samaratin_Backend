exports.up = function (knex, Promise) {
    return knex.schema.createTable('emergencies', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments('id').primary()
        table.varchar('emergency_name').notNullable()
        table.varchar('emergency_type', 255).notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('emergencies')
}
