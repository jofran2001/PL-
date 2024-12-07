import {Cpf} from "models/cpf";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";
import {ICpf} from "interface";

const cpfRepository = AppDataSource.getRepository(Cpf);

class CPFs {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await cpfRepository
        .createQueryBuilder()
        .insert()
        .into(Cpf)
        .values({...req.body.cpf, cliente: req.body.id})
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      if(req.body.cpf === undefined){
        next()
      }
      await cpfRepository
        .createQueryBuilder()
        .update()
        .set({...req.body.cpf})
        .where("id = :id", {
          id: req.body.cpf.id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await cpfRepository
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
}
const cpf = new CPFs();
export default cpf;
