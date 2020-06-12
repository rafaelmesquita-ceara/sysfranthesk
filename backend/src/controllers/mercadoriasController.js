const connection = require('../database/connection');

module.exports = {
  async Create(req, res) {
    const {merc_nome,
      merc_categoria,
      merc_valorcompra,
      merc_valorvenda,
      merc_estoque
    } = req.body;
    await connection('mercadorias').insert({
      merc_nome,
      merc_categoria,
      merc_valorcompra,
      merc_valorvenda,
      merc_estoque
    });
    return res.json({ "message" : "success" });
  },

  async Index(req, res){
    const [count] = await connection('mercadorias').count();
    var mercadorias = await connection('mercadorias').select(['*']);
    resposta = {
      count,
      mercadorias}
    return res.json(resposta);
  },

  async Update(req, res){
    const {merc_nome,
      merc_categoria,
      merc_valorcompra,
      merc_valorvenda,
      merc_estoque
    } = req.body;
    const { id } = req.params;
    await connection('mercadorias')
      .where('id', '=', id)
      .update({
        merc_nome,
        merc_categoria,
        merc_valorcompra,
        merc_valorvenda,
        merc_estoque
        });
      
      return res.json({"message" : "success"});
  },

  async Delete(req, res) {
    const { id } = req.params;
    await connection('mercadorias').where('id', id).delete();
    return res.status(204).send();
  }
}