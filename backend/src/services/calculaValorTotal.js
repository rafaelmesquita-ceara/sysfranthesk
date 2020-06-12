const connection = require('../database/connection');

async function calculaValorTotal(mercadorias){
  var total = 0;
  await Promise.all(mercadorias.map(
    async(mercadoria) => {
      await connection('mercadorias')
      .where('id', '=', mercadoria.mercadoria_id)
      .first()
      .select(['mercadorias.merc_valorvenda'])
      .then( data => {
        total += data.merc_valorvenda * mercadoria.quantidade
      }).catch(function(err) {
        console.log(err.stack);
        return "error"
      });
    }
  ))
  return(total)
}

module.exports = calculaValorTotal