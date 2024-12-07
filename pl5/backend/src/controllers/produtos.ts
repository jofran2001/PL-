import {Produto} from "models/produto";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";
import {IProdutos} from "interface";

const produtsoRepository = AppDataSource.getRepository(Produto);

class ProdutoController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await produtsoRepository
        .createQueryBuilder()
        .insert()
        .into(Produto)
        .values(req.body)
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  async relation(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const {produtosProdutoId} = req.body;
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(`produto_cliente`)
        .values({
          clienteId: id,
          produtoId: produtosProdutoId,
        })
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  async deleteRelations(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`produto_cliente`)
        .where("clienteId = :clienteClienteId", {
          clienteClienteId: id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async findMany(req: Request, res: Response) {
    try {
      const find = await produtsoRepository
        .createQueryBuilder()
        .select(["p"])
        .from(Produto, "p")
        .getMany();
      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
  async DeltarLigacaoUsuario(req: Request, res: Response) {
    try {
      const {id, produto} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`produto_cliente`)
        .where("clienteId = :id", {
          id: id,
        })
        .andWhere("produtoId = :produtoId", {
          produtoId: produto,
        })
        .execute();
      res.json({message: "Deletado com sucesso"});
    } catch (error) {
      res.json(error);
    }
  }
  async deletarProduto(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`produto_cliente`)
        .where("produtoId = :id", {
          id: id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async deletarProd(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(Produto)
        .where("id = :id", {
          id: id,
        })
        .execute();
      res.json({message: "Excluido"});
    } catch (error) {
      res.json(error);
    }
  }
  async editProduto(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await produtsoRepository
        .createQueryBuilder()
        .update()
        .set({...req.body})
        .where("id = :id", {
          id: id,
        })
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const find = await produtsoRepository
        .createQueryBuilder()
        .select(["p"])
        .from(Produto, "p")
        .where("p.id = :id ", {
          id: id,
        })
        .getOne();
      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
}
const produto = new ProdutoController();
export default produto;
