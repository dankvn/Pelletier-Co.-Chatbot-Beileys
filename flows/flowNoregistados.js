
const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const flowNoregistrados = addKeyword("USUARIOS_NO_REGISTRADOS")
  .addAnswer("no esta autorizado para ingrezara al bot");



module.exports =  flowNoregistrados;