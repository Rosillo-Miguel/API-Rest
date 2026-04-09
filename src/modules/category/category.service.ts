/*
    Ele sera responsavel por:
        -Criar Categpria
        -Listar categoria
        -Buscar categoria por id
        atualizar categoria
        excluir categoria
        não receve req e res
        não define rotas
        não sabe nada de HTTP
        
*/

import Category from "./category.model.js";
import type {
  ICategory,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "./category.types.js";

class CategoryService {
  public async create(data: ICreateCategoryDTO) {
    const category = await Category.create({
      name: data.name,
      description: data.description ?? "",
      active: data.active ?? true,
    });

    return category;
  }

  public async find() {
    return await Category.find();
  }

  public async findById(id: string) {
        return await Category.findById(id);
    }

  public async update(id: string, data: any) {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string) {
    return await Category.findByIdAndUpdate(id);
  }
}

export default new CategoryService();


