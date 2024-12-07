import produto from "controllers/produtos";
import express from "express";

const router = express.Router();

router.post("/cadastrar", produto.create);
router.post("/add-produto-cliente/:id", produto.relation);
router.get("/achar-produtos", produto.findMany);
router.get("/achar-produtos/:id", produto.findOne);
router.delete("/deletar-relacao/:id/:produto", produto.DeltarLigacaoUsuario);
router.delete("/deletar-produto/:id", produto.deletarProduto, produto.deletarProd);
router.put("/editar-produto/:id", produto.editProduto);

export default router;
