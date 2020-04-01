
exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function(table) {
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        table.string('empresa_id').notNullable()
        
        table.foreign('empresa_id').references('id').inTable('empresas')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tarefas')
  };
  