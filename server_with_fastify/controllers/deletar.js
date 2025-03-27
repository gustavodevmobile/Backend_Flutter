import fs from "fs";
import "dotenv/config";
import Database from "../database/database.js";

export const deletar = (req, reply) => {
  const { id, nameImageDir } = req.params;
  if (!id || !nameImageDir) {
    return reply.status(400).send("Parâmetros inválidos");
  }
  try {
    if (req.params.nameImageDir != "") {
      fs.unlinkSync("./images/" + req.params.nameImageDir, (err) => {
        if (err) {
          console.log("Erro ao deletar imagem no diretório:", err);
        }
      });
      Database.destroy({ where: { id: req.params.id } });
      console.log("Deletado do DB com sucesso!");
      reply.redirect("/");
    } else {
      Database.destroy({ where: { id: req.params.id } });
      console.log("Questão sem imagem deletada do DB com sucesso!");
      reply.redirect("/");
    }
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};
// fastify.get(
//     "/deletar/:id/:nameImageDir",
//     { preHandler: upload.single("image") },
//     (req, reply) => {
//       console.log(req.params.nameImageDir);
//       try {
//         if (req.params.nameImageDir != "") {
//           fs.unlinkSync("./images/" + req.params.nameImageDir, (err) => {
//             if (err) {
//               console.log("Erro ao deletar imagem no diretório:", err);
//             }
//           });
//           Database.destroy({ where: { id: req.params.id } });
//           console.log("Deletado do DB com sucesso!");
//           reply.redirect("/");
//         } else {
//           Database.destroy({ where: { id: req.params.id } });
//           console.log("Questão sem imagem deletada do DB com sucesso!");
//           reply.redirect("/");
//         }
//       } catch (err) {
//         console.log(err);
//         return reply.send(err);
//       }
//     }
//   );
