import { Router } from "express";

const routes = Router();

routes.get("/teste", (request,  response) => {
    return response.status(200).json({
        mensagemTeste: "Teste de rota de endpoint"
    });
});

export default routes;