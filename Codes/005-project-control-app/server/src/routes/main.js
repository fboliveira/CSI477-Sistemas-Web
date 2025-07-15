// import ... from ... -> default: export default
// import { ... } from ...

import { request, response, Router } from "express";

const mainRouter = Router();

mainRouter.get("/info", (request, response) => {
  response.send("<h1>Project Control Server</h1>");
});

mainRouter.get("/status", (request, response) => {
  response.json({
    code: 200,
    message: "Project Control API Server is running.",
  });
});

mainRouter.get("/", (request, response) => {
  response.status(401).send("<h1>Unauthorized.</h1>");
});

export { mainRouter };
