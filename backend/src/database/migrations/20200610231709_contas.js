
exports.up = function(knex) {
  return knex.schema.createTable('contas', function(table){
    table.increments();
    table.date('conta_vencimento');
    table.string('conta_descricao').notNullable();
    table.float('conta_valor').notNullable();
  });
};

exports.down = function(knex) {
  
};
