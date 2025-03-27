import fs from "fs";
import "dotenv/config";
import Database from "../database/database.js";

export const screen_cadastrar_questao = async (req, reply) => {
  return await reply.render("templates/cadastrar");
};

export const cadastrar_questao = async function (req, reply) {
  let image;
  let filename;
  //req.file.filename == undefined
  if (!req.file || !req.file.filename) {
    req.body.image = "sem imagem";
    image = req.body.image;
    filename = null;
  } else {
    image = fs.readFileSync("./images/" + req.file.filename);
    filename = req.file.filename;
  }

  try {
    await Database.create({
      elementarySchool: req.body.elementarySchool,
      schoolYear: req.body.schoolYear,
      displice: req.body.displice,
      subject: req.body.subject,
      question: req.body.question,
      image: image,
      nameImageDir: filename,
      answer: req.body.answer,
      alternativeA: req.body.altA,
      alternativeB: req.body.altB,
      alternativeC: req.body.altC,
      alternativeD: req.body.altD,
    });
    console.log("Cadastrado com sucesso");
    return reply.redirect("/");
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

//   fastify.post(
//     "/cadastrar",
//     { preHandler: upload.single("image") },
//     async function (req, reply) {
//       let image;
//       if (req.file.filename == undefined) {
//         req.body.image = "sem imagem";
//         image = req.body.image;
//       } else {
//         image = fs.readFileSync("./images/" + req.file.filename);
//       }

//       try {
//         await Database.create({
//           elementarySchool: req.body.elementarySchool,
//           schoolYear: req.body.schoolYear,
//           displice: req.body.displice,
//           subject: req.body.subject,
//           question: req.body.question,
//           image: image,
//           nameImageDir: req.file.filename,
//           answer: req.body.answer,
//           alternativeA: req.body.altA,
//           alternativeB: req.body.altB,
//           alternativeC: req.body.altC,
//           alternativeD: req.body.altD,
//         });
//         console.log("Cadastrado com sucesso");
//         return reply.redirect("/");
//       } catch (err) {
//         console.log(err);
//         return reply.send(err);
//       }
//     }
//   );
