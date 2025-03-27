
const upload = multer({ dest: "images/" });
import multer from "fastify-multer";

import {
  screen_editar_questao,
  editar_questao,
  editar_upload_image,
} from "../../controllers/editar.js";

async function routes_editar(fastify, options) {
  
  fastify.get(
    "/editar-questao/:id",
    { preHandler: upload.single("image") },
    screen_editar_questao
  );
  fastify.post(
    "/editar",
    { preHandler: upload.single("image") },
    editar_questao
  );
  fastify.post(
    "/editar/upload-image/update/:id",
    { preHandler: upload.single("imageUpdate") },
    editar_upload_image
  );
}

export default routes_editar;
