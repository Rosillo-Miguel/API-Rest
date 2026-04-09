import { Router } from "express";

import categoryController from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.get("/", categoryController.find);
categoryRoutes.post("/", categoryController.create);
categoryRoutes.get("/:id", categoryController.findById);
categoryRoutes.put("/:id", categoryController.update);
categoryRoutes.put("/:id", categoryController.delete);

export default categoryRoutes;
