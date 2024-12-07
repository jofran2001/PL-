import express from "express";
import Cliente from "controllers/cliente";
import cpfs from "controllers/cpf";
import rgs from "controllers/rg";
import tell from "controllers/telefone";
import Produtos from "controllers/produtos";
import Servico from "controllers/servico";
import endereco from "controllers/endereco";
import pet from "controllers/pet";
import servico from "controllers/servico";
const router = express.Router();

router.post(
  "/criar-cliente",
  Cliente.create,
  cpfs.create,
  endereco.create,
  tell.create,
  rgs.create,
  pet.create,
  endereco.teste
);
router.get("/achar-cliente/:id", Cliente.findOne);
router.get("/achar-cliente", Cliente.findMany);

router.put("/atualizar-cliente/:id", cpfs.update, endereco.update, Cliente.update);
router.delete(
  "/deletar-cliente/:id",
  tell.delete,
  rgs.delete,
  pet.deleteRelation,
  endereco.deleteRelation,
  cpfs.delete,
  Produtos.deleteRelations,
  servico.deleteRelations,
  Cliente.delete
);
export default router;
