import { Router } from "express";
import categoryRoutes from "./modules/category/category.routes.js";
const routes = Router();

routes.get("/teste", (request,  response) => {
    return response.status(200).json({
        mensagemTeste: "Teste de rota de endpoint"
    });
});

routes.use("/categories", categoryRoutes);
export default routes;