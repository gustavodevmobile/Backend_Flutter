import multer from "fastify-multer";
import fs from "fs";
import "dotenv/config";
import Database from "../database/database.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let imageUpdate = "";
let imageBufferUpdated = "";
let nameImageDirUpdated = "";
let nameImageDir = "";
let elementarySchoolUpdated = "";
let schoolYearUpdated = "";
let displiceUpdated = "";
let questionUpdated = "";
let subjetcUpdated = "";
let answerUpdated = "";
let alternativeAUpdated = "";
let alternativeBUpdated = "";
let alternativeCUpdated = "";
let alternativeDUpdated = "";

export const editar_questao = async (req, reply) => {
  try {
    const result = await Database.findByPk(req.body.id);
    const imageBuffer = result["dataValues"]["image"];
    const nameImageDir = result["dataValues"]["nameImageDir"];
    let image;
    let nameImageUpdated;
    if (req.file.filename == undefined && imageUpdate != undefined) {
      image = imageBufferUpdated;
      nameImageUpdated = nameImageDirUpdated;

      try {
        const files = fs.readdir("./images", { withFileTypes: true });
        for (var file of files) {
          if (file.name == nameImageDir) {
            fs.rename(
              "./images/" + file.name,
              "./images/" + nameImageDirUpdated,
              (err) => {
                if (err) {
                  console.log("Erro ao deletar imagem no diretório:", err);
                }
              }
            );
            console.log("Image Atualizada com sucesso!");
          }
        }
      } catch (error) {
        console.error("Erro ao acessar o diretório:", error);
      }
      const filePath = path.resolve(
        __dirname,
        "./images/" + nameImageDirUpdated
      );
      try {
        //fs.readFileSync(filePath);
        const stats = fs.lstatSync(filePath);
        if (stats.isFile()) {
          fs.readFileSync(filePath);
          console.log("Imagem salva com sucesso!");
        } else {
          console.error(`${filePath} não é um arquivo.`);
        }
      } catch (err) {
        console.error(`Erro ao acessar o arquivo ${filePath}:`, err);
      }
      //fs.readFileSync("./images/" + nameImageDirUpdated);
    } else {
      req.body.image = imageBuffer;
      image = req.body.image;
      nameImageUpdated = nameImageDir;
    }
    await Database.update(
      {
        elementarySchool: req.body.elementarySchool,
        schoolYear: req.body.schoolYear,
        displice: req.body.displice,
        subject: req.body.subject,
        question: req.body.question,
        image: image,
        nameImageDir: nameImageUpdated,
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

export const editar_upload_image = async (req, reply) => {
  //console.log(req.file.filename);

  try {
    const filePath = path.resolve(__dirname, "../images/" + req.file.filename);
    if (req.file.filename != undefined) {
      const imageBufferUpdated = fs.readFileSync(filePath);
      const imageBase64 = imageBufferUpdated.toString("base64");
      imageUpdate = imageBase64;
      nameImageDirUpdated = req.file.filename;
      console.log(nameImageDirUpdated);
    } else {
      console.error("Arquivo não encontrado:", filePath);
    }

    // imageBufferUpdated = fs.readFileSync("../images/" + req.file.filename);
    // const imageBase64 = imageBufferUpdated.toString("base64");
    // imageUpdate = imageBase64;

    // nameImageDirUpdated = req.file.filename;

    reply.redirect(`/editar-questao/${req.params.id}`);
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

export const screen_editar_questao = (req, reply) => {
  try {
    Database.findByPk(req.params.id).then((result) => {
      //console.group(result.nameImageDir);
      nameImageDir = result["dataValues"]["nameImageDir"];
      //console.log('nameImageDir', nameImageDir);
      const imageBase64 = result["dataValues"]["image"].toString("base64");
      result["dataValues"]["image"] = imageBase64;
      questionUpdated = result["dataValues"]["question"];
      reply.render("templates/editar", {
        id: result.id,
        elementarySchool: result.elementarySchool,

        schoolYear: result.schoolYear,
        displice: result.displice,
        subject: result.subject,
        question: result.question,
        image: 
        //`data:image/jpeg;base64,${result.image}`,
        imageUpdate
          ?? `data:image/jpeg;base64,${result.image}`,
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
