
exports.up = function(knex) {
  return knex.schema.createTable('vendedores', function(table){
    table.increments();
    table.string('vendedor_nome').notNullable();
    table.string('vendedor_contato').notNullable();
    table.string('vendedor_login').notNullable();
    table.string('vendedor_senha').notNullable();
  });
};

exports.down = function(knex) {
  
};
