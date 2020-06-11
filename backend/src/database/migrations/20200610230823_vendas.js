
exports.up = function(knex) {
  return knex.schema.createTable('vendas', function(table){

    table.increments();
    table.dateTime('venda_data').defaultTo(knex.fn.now());
    table.float('venda_valor').notNullable();
    table.integer('venda_cartao').notNullable();
    table.integer('fk_venda_vendedor').notNullable();
    table.foreign('fk_venda_vendedor').references('id').inTable('vendedores');
  });
};

exports.down = function(knex) {
  
};
