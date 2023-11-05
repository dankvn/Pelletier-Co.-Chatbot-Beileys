import bot from "@bot-whatsapp/bot";

const flowPrincipal = bot 
.addKeyword("hola")
  .addAnswer(
    "Bienvenidos a *Pelletier & Co.*",
    null,
    async (ctx, { gotoFlow }) => {
      const telefono = ctx.from;
      console.log(
        "consultando en base de datos si existe el numero registrado...."
      );

      const ifExist = await googlesheet.validatePhoneNumber(telefono);
      console.log(ifExist);

      if (ifExist) {
        // Si existe lo enviamos al flujo de regostrados..
        gotoFlow(flujoUsuariosRegistrados);
      } else {
        // Si NO existe lo enviamos al flujo de NO registrados..
        gotoFlow(flujoUsuariosNORegistrados);
      }
    }
  )

  .addAnswer([
    "¿Como podemos ayudarte?",
    "",
    "*1* Ver estatus de reparacion",
    "*2* Deparamento ventas",
    "*3* Administracion",
  ])
  .addAnswer("Responda con el numero de la opcion!");

module.exports = flowPrincipal;
