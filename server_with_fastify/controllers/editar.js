// import Fastify from "fastify";
// import fastifyView from "@fastify/view";
// import fastifyPostgres from "@fastify/postgres";
// import fastifyFormbody from "@fastify/formbody";
// import handlebars from "handlebars";
// import fastifyMultipart from "@fastify/multipart";
import multer from "fastify-multer";
import fs from "fs";
import "dotenv/config";
import Database from "../database/database.js";
//import path from "path";
//import jsdom from "jsdom";

//import { and, where } from "sequelize";
//import { mapValueFieldNames } from "sequelize/lib/utils";
//import { and, where } from "sequelize";

// const { JSDOM } = jsdom;
// const upload = multer({ dest: "images/" });
let imageUpdate = '';
let imageBufferUpdated = '';
let nameImageDirUpdated  = '';
let nameImageDir  = '';
let elementarySchoolUpdated  = '';
let schoolYearUpdated  = '';
let displiceUpdated  = '';
let questionUpdated  = '';
let subjetcUpdated  = '';
let answerUpdated  = '';
let alternativeAUpdated  = '';
let alternativeBUpdated  = '';
let alternativeCUpdated  = '';
let alternativeDUpdated  = '';


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

      fs.readdir("./images", { withFileTypes: true }, (err, files) => {
        for (var file of files) {
          if (file.name == nameImageDir) {
            fs.rename(
              "./images/" + file.name,
              "./images/" + nameImageDirUpdated,
              (err) => {
                if (err) {
                  console.log("Erro ao deletar imagem no diretório:", err);
                  console.log("Image Atualizada!");
                }
              }
            );
          }
        }
      });
      fs.readFileSync("./images/" + nameImageDirUpdated);
    } else {
      //if (req.file.filename == undefined && imageUpdate == undefined)
      req.body.image = imageBuffer;
      image = req.body.image;
      nameImageUpdated = nameImageDir;
    }
    Database.update(
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
  try {
    imageBufferUpdated = fs.readFileSync("./images/" + req.file.filename);
    const imageBase64 = imageBufferUpdated.toString("base64");
    imageUpdate = imageBase64;

    nameImageDirUpdated = req.file.filename;

    reply.redirect(`/editar-questao/${req.params.id}`);
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

export const screen_editar_questao = (req, reply) => {
  try {
    //console.log('req.body.question', req.body.question);
    Database.findByPk(req.params.id).then((result) => {
      nameImageDir = result["dataValues"]["nameImageDir"];
      //console.log('nameImageDir', nameImageDir);
      const imageBase64 = result["dataValues"]["image"].toString("base64");
      result["dataValues"]["image"] = imageBase64;
      questionUpdated = result["dataValues"]["question"];
      reply.render("templates/editar", {
        id: result.id,
        elementarySchool:
          elementarySchoolUpdated != undefined
            ? elementarySchoolUpdated
            : result.elementarySchool,
        schoolYear:
          schoolYearUpdated != undefined
            ? schoolYearUpdated
            : result.schoolYear,
        displice:
          displiceUpdated != undefined ? displiceUpdated : result.displice,
        subject: subjetcUpdated != undefined ? subjetcUpdated : result.subject,
        question: result.question,
        image:
          imageUpdate != undefined
            ? `data:image/jpeg;base64,${imageUpdate}`
            : `data:image/jpeg;base64,${result.image}`,
        nameImageDir:
          nameImageDirUpdated != undefined
            ? nameImageDirUpdated
            : result.nameImageDir,
        answer: answerUpdated != undefined ? answerUpdated : result.answer,
        alternativeA:
          alternativeAUpdated != undefined
            ? alternativeAUpdated
            : result.alternativeA,
        alternativeB:
          alternativeBUpdated != undefined
            ? alternativeBUpdated
            : result.alternativeB,
        alternativeC:
          alternativeCUpdated != undefined
            ? alternativeCUpdated
            : result.alternativeC,
        alternativeD:
          alternativeDUpdated != undefined
            ? alternativeDUpdated
            : result.alternativeD,
      });
    });
    // fs.unlinkSync("./images/" + req.file.filename, (err) => {
    //   if (err) {
    //     console.log("Erro ao deletar imagem no diretório:", err);
    //   }
    // });
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};


// import fs from "fs";
// import "dotenv/config";
// import Database from "../database/database.js";

// const updateImage = (oldName, newName) => {
//   try {
//     fs.renameSync(`./images/${oldName}`, `./images/${newName}`);
//     console.log("Imagem atualizada com sucesso!");
//   } catch (err) {
//     console.error("Erro ao renomear imagem:", err);
//   }
// };

// export const editar_questao = async (req, reply) => {
//   try {
//     const result = await Database.findByPk(req.body.id);
//     if (!result) {
//       return reply.status(404).send({ error: "Questão não encontrada" });
//     }

//     const { image: currentImage, nameImageDir: currentName } = result.dataValues;
//     const newImage = req.file ? fs.readFileSync(`./images/${req.file.filename}`) : currentImage;
//     const newName = req.file ? req.file.filename : currentName;

//     if (req.file) {
//       updateImage(currentName, newName);
//     }

//     await Database.update(
//       {
//         ...req.body,
//         image: newImage,
//         nameImageDir: newName,
//       },
//       { where: { id: req.body.id } }
//     );

//     reply.redirect("/");
//   } catch (err) {
//     console.error(err);
//     return reply.status(500).send({ error: "Erro ao editar questão" });
//   }
// };

