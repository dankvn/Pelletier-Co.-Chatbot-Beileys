const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const flowRegistrados = bot
  .addKeyword("USUARIOS_REGISTRADOS")
  .addAnswer(
    "Bienvenidos a *Pelletier & Co.* ",
    null,
    async (ctx, { flowDynamic }) => {
      const telefono = ctx.from;
      const ifExist = await googlesheet.validatePhoneNumber(telefono);

      const mensaje = `hola ${ifExist.Nombre},que producto  deseas comprar te enevio una lista de productos `;
      await flowDynamic(mensaje);
      
    }
    
  );

  module.exports = flowRegistrados;