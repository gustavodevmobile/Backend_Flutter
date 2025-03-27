import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyMultipart from "@fastify/multipart";
import handlebars from "handlebars";
import fastifyPostgres from "@fastify/postgres";
import Database from "../database/database.js";
let amountQuestions;
let discipline;
let schoolYear;

// const fastify = Fastify({
//   logger: false,
// });
// fastify.register(fastifyMultipart);

// fastify.register(fastifyView, {
//   engine: { handlebars: handlebars },
//   viewExt: "handlebars",
//   propertyName: "render",
// });

// fastify.register(fastifyPostgres, {
//   connectionString: process.env.URL,
// });

export const geografia_1ano = async (req, reply) => {
  try {
    await Database.findAll({
      where: { displice: "Geografia", schoolYear: "1º Ano" },
    }).then((result) => {
      result.map((element) => {
        const imageBase64 = element["dataValues"]["image"].toString("base64");
        element["dataValues"]["image"] = imageBase64;
        discipline = element["dataValues"]["displice"];
        schoolYear = element["dataValues"]["schoolYear"];
        amountQuestions = result.length;
      });

      return reply.render("templates/disciplines", {
        question: result,
        amount: amountQuestions,
        discipline: discipline,
        schoolYear: schoolYear,
      });
    });
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

export const geografia_2ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "2º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_3ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "3º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_4ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "4º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_5ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "5º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_6ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "6º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_7ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "7º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_8ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "8º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

  export const geografia_9ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Geografia", schoolYear: "9º Ano" },
      }).then((result) => {
        result.map((element) => {
          const imageBase64 = element["dataValues"]["image"].toString("base64");
          element["dataValues"]["image"] = imageBase64;
          discipline = element["dataValues"]["displice"];
          schoolYear = element["dataValues"]["schoolYear"];
          amountQuestions = result.length;
        });
  
        return reply.render("templates/disciplines", {
          question: result,
          amount: amountQuestions,
          discipline: discipline,
          schoolYear: schoolYear,
        });
      });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  };

