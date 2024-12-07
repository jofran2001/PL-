import {Servico} from "models/servico";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";
import {IServicos} from "interface";

const servicosRepository = AppDataSource.getRepository(Servico);

class ServicoController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await servicosRepository
        .createQueryBuilder()
        .insert()
        .into(Servico)
        .values(req.body)
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  async findMany(req: Request, res: Response) {
    try {
      const find = await servicosRepository
        .createQueryBuilder()
        .select(["s"])
        .from(Servico, "s")
        .getMany();
      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
  async relation(req: Request, res: Response) {
    try {
      const {servicoId} = req.body;
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(`servico_cliente`)
        .values({
          clienteId: id,
          servicoId: servicoId,
        })
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  async DeltarLigacaoUsuario(req: Request, res: Response) {
    try {
      const {id, servico} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`servico_cliente`)
        .where("clienteId = :clienteId", {
          clienteId: id,
        })
        .andWhere("servicoId = :servicoId", {
          servicoId: servico,
        })
        .execute();
      res.json({message: "oi"});
    } catch (error) {
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const find = await servicosRepository
        .createQueryBuilder()
        .select(["s"])
        .from(Servico, "s")
        .where("s.id = :id", {id: id})
        .getOne();

      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
  async deleteRelations(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`servico_cliente`)
        .where("clienteId = :clienteId", {
          clienteId: id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async deletar(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await servicosRepository
        .createQueryBuilder()
        .delete()
        .from(Servico)
        .where("id = :id", {id: id})
        .execute();
      res.json({ok: "deleteado"});
    } catch (error) {
      res.json(error);
    }
  }
  async DeletarObjeto(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(`servico_cliente`)
        .where("servicoId = :servicoid", {
          servicoid: id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async editar(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await servicosRepository
        .createQueryBuilder()
        .update()
        .set(req.body)
        .where("id = :id", {id: id})
        .execute();
      res.json({ok: "Editados"});
    } catch (error) {
      res.json(error);
    }
  }
}

const servico = new ServicoController();
export default servico;
