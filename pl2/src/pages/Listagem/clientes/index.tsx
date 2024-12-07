/* eslint-disable react/jsx-pascal-case */
import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import NavBar_ from "../../../component/NavBar";
import "./styles.css";

export class Clientes extends Component {
  render() {
    return (
      <section>
        <header>
          <NavBar_ />
        </header>
        <main>
          <h1>Clientes</h1>
          <div className="tables">
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Nome Social</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Luis Inácio Lula Da Silva</td>
                  <td>9 Dedos</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_cliente/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button
                        variant="outline-success"
                        href="/editar_cliente/1"
                      >
                        Editar
                      </Button>{" "}
                      <Button variant="outline-info" href="/clientes/1">
                        Visualizar
                      </Button>{" "}
                      <Button variant="outline-danger">Remover</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>suzane von richthofen</td>
                  <td>Yoki</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-success">Editar</Button>{" "}
                      <Button variant="outline-info">Visualizar</Button>{" "}
                      <Button variant="outline-danger">Remover</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Guilerme Boulos</td>
                  <td>Sem Terra</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-success">Editar</Button>{" "}
                      <Button variant="outline-info">Visualizar</Button>{" "}
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
}
