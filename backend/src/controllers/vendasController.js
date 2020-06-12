const connection = require('../database/connection');
const calculadora = require('../services/calculaValorTotal');

module.exports = {
  async Create(req, res){
    const{
      venda_cartao,
      fk_venda_vendedor,
      venda_mercadorias
    } = req.body;
   var venda_valor = await calculadora(venda_mercadorias)
   console.log(venda_valor);
  
   // INSERINDO VENDA NO BANCO
    await connection('vendas').insert({
      venda_valor,
      venda_cartao,
      fk_venda_vendedor
    })
    .returning('id')
    .catch(function(err) {
      console.log(err.stack);
      return res.status(500).send();
    })
    .then(async(id) => {
      await Promise.all(venda_mercadorias.map(
        async(mercadoria) => {

          //INSERINDO AS MERCADORIAS DA VENDA
          await connection('venda_mercadorias').insert({
            mercadoria_quantidade : mercadoria.quantidade,
            fk_mercadoria_id : mercadoria.mercadoria_id,
            fk_venda_id : id[0]
          }).catch(function(err) {

            console.log(err.stack);
            return res.status(500).json({"Erro" : "Erro ao criar as mercadorias da venda"});

          }).then(async() => {

            // RECEBENDO O ESTOQUE DAS MERCADORIAS
            await connection('mercadorias')
              .where('id', '=', mercadoria.mercadoria_id)
              .first()
              .select('mercadorias.merc_estoque')
              .catch(function(err) {

                console.log(err.stack);
                return res.status(500).json({"Erro" : "Erro ao receber o estoque das mercadorias"});
      
              })
              .then( async(data) => {

                // DANDO BAIXA NAS MERCADORIAS E ATUALIZANDO O ESTOQUE
                await connection('mercadorias')
                  .where('id', '=', mercadoria.mercadoria_id)
                  .update({
                    merc_estoque : data.merc_estoque - mercadoria.quantidade
                    }).catch(function(err) {

                      console.log(err.stack);
                      return res.status(500).json({"Erro" : "Erro ao dar baixa nas mercadorias"});
            
                    });
              });
          });
        }
      ))
    });

    return res.status(204).send();

  },

  async Index(req, res){
    var vendas = await connection('vendas').select(['*'])
    return res.json(vendas);
  },
  
  async Update(req, res){
    return res.json({"message" : "Não há necessidade ainda de um update em vendas"});
  },
  async Delete(req, res){
    const { id } = req.params;
    await connection('vendas').where('id', id).delete();
    return res.status(204).send();
  }
}