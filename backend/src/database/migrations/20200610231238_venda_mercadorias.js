
exports.up = function(knex) {
  return knex.schema.createTable('venda_mercadorias', function(table){

    table.increments();
    table.integer('mercadoria_quantidade').notNullable();
    table.integer('fk_mercadoria_id').notNullable();
    table.integer('fk_venda_id').notNullable();
    table.foreign('fk_mercadoria_id').references('id').inTable('mercadorias');
    table.foreign('fk_venda_id').references('id').inTable('vendas');
  });
};

exports.down = function(knex) {
  
};
