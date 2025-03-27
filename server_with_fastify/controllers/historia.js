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

export const historia_1ano = async (req, reply) => {
  try {
    await Database.findAll({
      where: { displice: "História", schoolYear: "1º Ano" },
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

export const historia_2ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "2º Ano" },
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

  export const historia_3ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "3º Ano" },
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

  export const historia_4ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "4º Ano" },
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

  export const historia_5ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "5º Ano" },
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

  export const historia_6ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "6º Ano" },
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

  export const historia_7ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "7º Ano" },
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

  export const historia_8ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "8º Ano" },
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

  export const historia_9ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "História", schoolYear: "9º Ano" },
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