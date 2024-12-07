import {Telefone} from "models/telefone";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";
import {ITelefone} from "interface";

const telefoneRepository = AppDataSource.getRepository(Telefone);

class TelefoneController {
  async create(req: Request, res: Response, next: NextFunction) {
    if (req.body.telefone === undefined) {
      next();
    }
    try {
      await telefoneRepository
        .createQueryBuilder()
        .insert()
        .into(Telefone)
        .values(
          req.body.telefone.map(
            (i: any) =>
              ({
                ...i,
                cliente: req.body.id,
              } || [])
          )
        )
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {id, clieteId} = req.params;
      const body: ITelefone = req.body;
      await telefoneRepository
        .createQueryBuilder()
        .update()
        .set({
          ddd: body.ddd,
          numero: body.numero,
        })
        .where("id = :id", {
          id: id,
        })
        .andWhere("cliente = :id", {
          id: clieteId,
        })
        .execute();
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }

  async ifNotExistTell(req: Request, res: Response, next: NextFunction) {
    try {
      await telefoneRepository
        .createQueryBuilder()
        .insert()
        .into(Telefone)
        .values(
          req.body.telefone.map(
            (i: any) =>
              ({
                ...i,
                cliente: req.body.id,
              } || [])
          )
        )
        .execute();
      res.json("Ok");
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await telefoneRepository
        .createQueryBuilder()
        .delete()
        .where("cliente = :id", {
          id: id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async createTell(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const body: [] = req.body;
      await telefoneRepository
        .createQueryBuilder()
        .insert()
        .into(Telefone)
        .values(body.map((i: any) => ({...i, cliente: id})))
        .execute();
    } catch (error) {
      res.json(error);
    }
  }
  async deletarTell(req: Request, res: Response) {
    try {
      const {id, tell} = req.params;
      await telefoneRepository
        .createQueryBuilder()
        .delete()
        .from(Telefone)
        .where("id = :id", {
          id: tell,
        })
        .andWhere("cliente = :id", {
          id: id,
        })
        .execute();
    } catch (error) {
      res.json(error);
    }
  }
}
const tell = new TelefoneController();
export default tell;
