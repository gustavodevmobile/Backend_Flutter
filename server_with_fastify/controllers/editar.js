//import multer from "fastify-multer";
import fs from "fs";
import "dotenv/config";
import Database from "../database/database.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const editar_questao = async (req, reply) => {
  try {
    const result = await Database.findByPk(req.body.id);
    const imageBuffer = result["dataValues"]["image"];
    const nameImageDir = result["dataValues"]["nameImageDir"];
    let nameImageDirUpdated;
    let image;

    if (req.file.filename != undefined) {
      try {
        const oldPath = path.resolve(__dirname, "../images/" + nameImageDir);
        const newPath = path.resolve(
          __dirname,
          "../images/" + req.file.filename
        );
        console.log("req.file.filename", req.file.filename);
        if (fs.existsSync(oldPath)) {
          fs.renameSync(oldPath, newPath, (err) => {
            if (err) {
              console.log("Erro ao renomear o arquivo:", err);
            }
          });
        }
        image = fs.readFileSync("./images/" + req.file.filename);
        console.log("Arquivo renomeado com sucesso:", newPath);
      } catch (error) {
        console.error("Erro ao acessar o diretório:", error);
      }
      
    } else {
      image = imageBuffer;
      nameImageDirUpdated = nameImageDir;
    }
    await Database.update(
      {
        elementarySchool: req.body.elementarySchool,
        schoolYear: req.body.schoolYear,
        displice: req.body.displice,
        subject: req.body.subject,
        question: req.body.question,
        image: image,
        nameImageDir: nameImageDirUpdated,
        answer: req.body.answer,
        alternativeA: req.body.altA,
        alternativeB: req.body.altB,
        alternativeC: req.body.altC,
        alternativeD: req.body.altD,
      },
      { where: { id: req.body.id } }
    );
    reply.redirect("/");
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

export const screen_editar_questao = (req, reply) => {
  try {
    let image;
    let nameImage;
    Database.findByPk(req.params.id).then((result) => {
      //console.group(result.nameImageDir);
      const nameImageDir = result["dataValues"]["nameImageDir"];
      //console.log('nameImageDir', nameImageDir);
      const imageBase64 = result["dataValues"]["image"].toString("base64");
      result["dataValues"]["image"] = imageBase64;
      

      reply.render("templates/editar", {
        id: result.id,
        elementarySchool: result.elementarySchool,
        schoolYear: result.schoolYear,
        displice: result.displice,
        subject: result.subject,
        question: result.question,
        image: `data:image/jpeg;base64,${result.image}`,
        nameImageDir: result.nameImageDir,
        answer: result.answer,
        alternativeA: result.alternativeA,
        alternativeB: result.alternativeB,
        alternativeC: result.alternativeC,
        alternativeD: result.alternativeD,
      });
    });
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};
