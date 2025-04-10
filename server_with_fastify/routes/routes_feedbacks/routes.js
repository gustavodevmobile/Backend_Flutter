import { feedbacks } from "../../controllers/feedbacks.js";


async function route_feedback(fastify, options) {
  fastify.post("/feedback/:id", feedbacks);
    
}

export default route_feedback;