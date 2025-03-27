import Database from "../database/database.js";
let amountQuestions;
let discipline;
let schoolYear;



export const portugues_1ano = async (req, reply) => {
  try {
    await Database.findAll({
      where: { displice: "Português", schoolYear: "1º Ano" },
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

export const portugues_2ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "2º Ano" },
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

  export const portugues_3ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "3º Ano" },
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

  export const portugues_4ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "4º Ano" },
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

  export const portugues_5ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "5º Ano" },
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

  export const portugues_6ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "6º Ano" },
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

  export const portugues_7ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "7º Ano" },
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

  export const portugues_8ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "8º Ano" },
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

  export const portugues_9ano = async (req, reply) => {
    try {
      await Database.findAll({
        where: { displice: "Português", schoolYear: "9º Ano" },
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