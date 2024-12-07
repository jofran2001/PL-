import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Clientes } from "../pages/Listagem/clientes";
import { Produtos } from "../pages/Listagem/produtos";
import { Servicos } from "../pages/Listagem/servicos";
import { Consumos } from "../pages/Consumos/Consumos";
import { CadastrarClientes } from "../pages/Cadastro/clientes";
import { CadastrarProdutos } from "../pages/Cadastro/produtos";
import { CadastrarServico } from "../pages/Cadastro/servicos";
import { VisualizarCliente } from "../pages/Visualizar/clientes";
import { VisualizarProduto } from "../pages/Visualizar/produtos";
import { VisualizarServico } from "../pages/Visualizar/servicos";
import { EditarCliente } from "../pages/Editar/clientes";
import { EditarProduto } from "../pages/Editar/produtos";
import { EditarServico } from "../pages/Editar/servicos";
import ClienteProduto from "../pages/vincular/p-c";
import ClienteServico from "../pages/vincular/s-c";
import ConsumosUm from "../pages/Consumos/Consumos/consumo1";
import ConsumosDois from "../pages/Consumos/Consumos/consumo2";
import ConsumosTres from "../pages/Consumos/Consumos/consumo3";
import ConsumosQuatro from "../pages/Consumos/Consumos/consumo4";
import ConsumosCinco from "../pages/Consumos/Consumos/consumo5";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/consumos" element={<Consumos />} />
        <Route path="/consumos/1" element={<ConsumosUm />} />
        <Route path="/consumos/2" element={<ConsumosDois />} />
        <Route path="/consumos/3" element={<ConsumosTres />} />
        <Route path="/consumos/4" element={<ConsumosQuatro />} />
        <Route path="/consumos/5" element={<ConsumosCinco />} />
        <Route path="/cadastrar_cliente" element={<CadastrarClientes />} />
        <Route path="/cadastrar_produto" element={<CadastrarProdutos />} />
        <Route path="/cadastrar_servico" element={<CadastrarServico />} />
        <Route path="/clientes/:id" element={<VisualizarCliente />} />
        <Route path="/produtos/:id" element={<VisualizarProduto />} />
        <Route path="/servicos/:id" element={<VisualizarServico />} />
        <Route path='/cadastrar_produto_servico/:id' element={<ClienteServico />} />
        <Route path='/cadastrar_produto/:id' element={<ClienteProduto />} />
        <Route path="/editar_cliente/:id" element={<EditarCliente />} />
        <Route path="/editar_produto/:id" element={<EditarProduto />} />
        <Route path="/editar_servico/:id" element={<EditarServico />} />
      </Routes>
    </Router>
  );
}
