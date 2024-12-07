import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useEffect, useState } from "react";
import { IProduto } from "../../interfaces";
import { api } from "../../../service";

export function Produtos() {

  const [produtos, setProdutos] = useState([] as IProduto[])

  async function loadProdutos() {
    await api.get<IProduto[]>(`produto/achar-produtos`).then(({ data }) => setProdutos(data))
  }
  useEffect(() => {
    loadProdutos()
  }, [produtos])

  const handleDelete = async (id: number) => {
    await api.delete(`produto/deletar-produto/${id}`)
    loadProdutos()
  }

  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Produtos</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos && produtos.map((prod) => {
                return (
                  <tr>
                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>R${prod.valor}</td>
                    <td>
                      <div className="icons">
                        <a href={`/editar_produto/${prod.id}`}>
                          <PencilSimple size={35} color="#198754" />
                        </a>
                        <a href={`/produtos/${prod.id}`}>
                          <Eye size={35} color="#0DCAF0" />
                        </a>
                        <a onClick={() => { handleDelete(prod.id) }} href="##">
                          <Eraser size={35} color="#DC3545" />
                        </a>
                      </div>
                      <div className="Column">
                        <Button variant="outline-success" href={`/editar_produto/${prod.id}`}>
                          Editar
                        </Button>{" "}
                        <Button variant="outline-info" href={`/produtos/${prod.id}`}>
                          Visualizar
                        </Button>{" "}
                        <Button onClick={() => { handleDelete(prod.id) }} variant="outline-danger">Remover</Button>{" "}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}
