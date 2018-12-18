exports.up = function (knex, Promise) {
    return knex.schema.createTable('steps', function (table) {
        // TABLE COLUMN DEFINITIONS HERE
        table.increments('id').primary()
        table.increments('emName').notNullable()
        table.string('key').notNullable()
        table.string('step').notNullable()
        table.timestamps(true, true)
    })
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
}
