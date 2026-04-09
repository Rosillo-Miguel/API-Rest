// toda vez que bater num endpoint ele rebate aqui

import type { Request, Response } from "express";
import categoryService from "./category.service.js";

class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, active } = request.body ?? {};
    const category = await categoryService.create({
      name,
      description,
      active,
    });

    return response.status(201).json(category);
  }

  public async find(request: Request, response: Response) {
    const categories = categoryService.find();
    return response.status(200).json(categories);
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id || typeof id !== "string") {
        return response.status(400).json({
            message: "Id inválido"
        });
    }

    const category = await categoryService.findById(id);

    return response.status(200).json(category);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { name, description, active } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    const category = await categoryService.update(id, {
      name,
      description,
      active,
    });
    return response.json(category);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params ?? "";
    const { name, description, active } = request.body;

    if (!id || typeof id !== "string") {
      return response.status(400).json({
        message: "Id invalido",
      });
    }
    await categoryService.delete(id);

    return response.status(200).json({
        message: "Objeto deletado com sucesso",
    });
  }

}

export default new CategoryController();
