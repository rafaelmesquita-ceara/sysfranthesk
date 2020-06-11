
exports.up = function(knex) {
  return knex.schema.createTable('movimentacao', function(table){
    table.increments();
    table.dateTime('movimentacao_data').defaultTo(knex.fn.now());
    table.string('movimentacao_descricao').notNullable();
    table.float('movimentacao_valor').notNullable();
    table.integer('fk_caixa_id');
    table.foreign('fk_caixa_id').references('id').inTable('caixa');
  });
};

exports.down = function(knex) {
  
};
