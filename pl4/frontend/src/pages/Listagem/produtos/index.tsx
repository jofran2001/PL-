import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function Produtos() {
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
              <tr>
                <td>1</td>
                <td>Caminha GG</td>
                <td>R$15</td>
                <td>
                  <div className="icons">
                    <a href="/editar_produto/1">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="/produtos/1">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success" href="/editar_produto/1">
                      Editar
                    </Button>{" "}
                    <Button variant="outline-info" href="/produtos/1">
                      Visualizar
                    </Button>{" "}
                    <Button variant="outline-danger">Remover</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Xô XiXi Anti-odor</td>
                <td>R$20</td>
                <td>
                  <div className="icons">
                    <a href="##">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="##">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success" href="##">
                      Editar
                    </Button>{" "}
                    <Button variant="outline-info" href="##">
                      Visualizar
                    </Button>{" "}
                    <Button variant="outline-danger">Remover</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Casinha XG feita de madeira</td>
                <td>R$1500</td>
                <td>
                  <div className="icons">
                    <a href="##">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="##">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success" href="##">
                      Editar
                    </Button>{" "}
                    <Button variant="outline-info" href="##">
                      Visualizar
                    </Button>{" "}
                    <Button variant="outline-danger">Remover</Button>{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}
