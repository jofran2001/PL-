import servico from "controllers/servico";
import express from "express";

const router = express.Router();

router.post("/cadastrar", servico.create);
router.get("/achar-servicos", servico.findMany);
router.get("/achar-servicos/:id", servico.findOne);
router.post('/add-servico-cliente/:id', servico.relation)
router.delete("/deletar-servico/:id", servico.DeletarObjeto, servico.deletar);
router.delete("/deletar-relacao-usuario/:id/:servico", servico.DeltarLigacaoUsuario)
router.put("/editar-servico/:id", servico.editar);
export default router;
