import { Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function Consumos() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Consumos</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Listagem dos 10 clientes que mais consumiram produtos ou
                  serviços, em quantidade, não em valor
                </td>
                <td>
                  <div className="icons">
                    <a href={`/consumos/1`}>
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button href={`/consumos/1`} variant="outline-info">
                      Visualizar
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Listagem geral dos serviços mais consumidos. Quantidade</td>
                <td>
                  <div className="icons">
                    <a href={`/consumos/2`}>
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-info" href={`/consumos/2`}>
                      Visualizar
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Listagem geral dos produtos mais consumidos. Quantidade</td>
                <td>
                  <div className="icons">
                    <a href="/consumos/3">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-info" href="/consumos/3">
                      Visualizar
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Listagem dos serviços ou produtos mais consumidos por tipo e
                  raça de pets.
                </td>
                <td>
                  <div className="icons">
                    <a href="/consumos/4">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-info" href="/consumos/4">
                      Visualizar
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Listagem dos 5 clientes que mais consumiram em valor, não em
                  quantidade.
                </td>
                <td>
                  <div className="icons">
                    <a href="/consumos/5">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-info" href="/consumos/5">
                      Visualizar
                    </Button>{" "}
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
