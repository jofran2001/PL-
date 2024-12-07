import {Pet} from "models/pet";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";

const PetRepository = AppDataSource.getRepository(Pet);

class PetController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body.pet === undefined) {
        next();
      }
      await PetRepository.createQueryBuilder()
        .insert()
        .into(Pet)
        .values(
          req.body.pet.map((i: any) => ({...i, cliente: req.body.id})) || []
        )
        .execute();
      next();
    } catch (error: any) {
      res.json({error: error});
    }
  }
  async deleteRelation(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await PetRepository.createQueryBuilder()
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
const pet = new PetController();
export default pet;
