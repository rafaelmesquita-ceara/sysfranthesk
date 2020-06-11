
exports.up = function(knex) {
  return knex.schema.createTable('mercadorias', function(table){

    table.increments();
    table.string('merc_nome').notNullable();
    table.string('merc_categoria').notNullable();
    table.float('merc_valorcompra').notNullable();
    table.float('merc_valorvenda').notNullable();
    table.integer('merc_estoque').notNullable();
  });
};

exports.down = function(knex) {
  
};
