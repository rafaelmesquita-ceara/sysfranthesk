const connection = require('../database/connection');

module.exports = {
  async Create(req, res){
    const{
      vendedor_nome,
      vendedor_contato,
      vendedor_login,
      vendedor_senha
    } = req.body;

    await connection('vendedores').insert({
      vendedor_nome,
      vendedor_contato,
      vendedor_login,
      vendedor_senha
    });

    return res.status(204).send();
  },

  async Index(req, res){
    var resposta = await connection('vendedores').select(['*'])
    return res.json(resposta);
  },
  
  async Update(req, res){
    const{
      vendedor_nome,
      vendedor_contato,
      vendedor_login,
      vendedor_senha
    } = req.body;
    const { id } = req.params;
    await connection('vendedores')
    .where('id', '=', id)
    .update({
      vendedor_nome,
      vendedor_contato,
      vendedor_login,
      vendedor_senha
    });

    return res.status(204).send();
  },
  async Delete(req, res){
    const { id } = req.params;
    await connection('vendedores').where('id', id).delete();
    return res.status(204).send();
  }
}