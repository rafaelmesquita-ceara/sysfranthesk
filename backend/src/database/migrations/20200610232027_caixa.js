
exports.up = function(knex) {
  return knex.schema.createTable('caixa', function(table){
    table.increments();
    table.dateTime('caixa_data').defaultTo(knex.fn.now());
    table.integer('caixa_status').notNullable();
    table.float('caixa_valor_abertura').notNullable();
    table.float('caixa_valor_fechamento');
  });
};

exports.down = function(knex) {
  
};
