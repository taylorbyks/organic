exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()
    table.string('company_id').notNullable()

    table.foreign('company_id').references('id').inTable('companies')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}
