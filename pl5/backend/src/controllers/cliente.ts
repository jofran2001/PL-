import {Cliente} from "models/cliente";
import {AppDataSource} from "database/database";
import {NextFunction, Request, Response} from "express";

const clienteRepository = AppDataSource.getRepository(Cliente);

class ControllCliente {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await clienteRepository
        .createQueryBuilder()
        .insert()
        .into(Cliente)
        .values(req.body)
        .execute();
      next();
    } catch (error: any) {
      if (error.sqlState === "23000") {
        res.json({error: "Email já cadastrado no sistema"});
      } else {
        res.json({error: error});
      }
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      await clienteRepository
        .createQueryBuilder()
        .update(Cliente)
        .set({
          nome: req.body.nome,
          nomeSocial: req.body.nomeSocial,
          email: req.body.email,
        })
        .where("id = :id", {id: id})
        .execute();
      res.json("Oi");
    } catch (error) {
      res.json(error);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await clienteRepository
        .createQueryBuilder()
        .delete()
        .where("id = :id", {id: id})
        .execute();
      res.json({message: "Cliente deletado com sucesso"});
    } catch (error) {
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const find = await clienteRepository
        .createQueryBuilder("cli")
        .leftJoinAndSelect("cli.cpf", "cpf")
        .leftJoinAndSelect("cli.rg", "rg")
        .leftJoinAndSelect("cli.telefones", "tell")
        .leftJoinAndSelect("cli.produtos", "prod")
        .leftJoinAndSelect("cli.servicos", "serv")
        .leftJoinAndSelect("cli.endereco", "end")
        .leftJoinAndSelect("cli.pets", "pet")
        .where("cli.id = :id", {id: id})
        .getOne();
      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
  async findMany(req: Request, res: Response) {
    try {
      const find = await clienteRepository
        .createQueryBuilder()
        .select(["cli", "cpf", "rg", "prod", "serv", "pet"])
        .from(Cliente, "cli")
        .leftJoin("cli.cpf", "cpf")
        .leftJoin("cli.rg", "rg")
        .leftJoin("cli.produtos", "prod")
        .leftJoin("cli.servicos", "serv")
        .leftJoin("cli.pets", "pet")
        .getMany();
      res.json(find);
    } catch (error) {
      res.json(error);
    }
  }
}
const cliente = new ControllCliente();
export default cliente;
