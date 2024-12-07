import {Endereco} from "models/endereco";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";

const EnderecoRepositorio = AppDataSource.getRepository(Endereco);

class EnderecoController {
  async teste(req: Request, res: Response, next: NextFunction) {
    res.json("Ok");
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      await EnderecoRepositorio.createQueryBuilder()
        .insert()
        .into(Endereco)
        .values({
          ...req.body.endereco,
          cliente: req.body.id,
        })
        .execute();
      next();
    } catch (error: any) {
      res.json({error: error});
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body.endereco === undefined) {
        next();
      }
      await EnderecoRepositorio.createQueryBuilder()
        .update()
        .set({...req.body.endereco})
        .where("id = :id", {
          id: req.body.endereco.id,
        })
        .execute();
      next();
    } catch (error) {
      res.json(error);
    }
  }
  async deleteRelation(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await EnderecoRepositorio.createQueryBuilder()
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
const end = new EnderecoController();
export default end;
