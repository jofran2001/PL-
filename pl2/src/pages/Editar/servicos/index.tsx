/* eslint-disable react/jsx-pascal-case */
import { Component } from "react";
import { Button } from "react-bootstrap";
import NavBar_ from "../../../component/NavBar";

export class EditarServico extends Component {
  render() {
    return (
      <section>
        <header>
          <NavBar_ />
        </header>
        <main>
          <h1>Editar Serviço</h1>
          <Button variant="outline-dark" href="/Servicos">
            Voltar
          </Button>
          <div className="forms">
            <form>
              <div className="field">
                <label htmlFor="Servico">Serviço:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="Preco">Preço:</label>
                <input type="text" defaultValue="" />
              </div>
              <Button className="submit" variant="outline-dark" type="submit">
                Editar
              </Button>{" "}
            </form>
          </div>
        </main>
      </section>
    );
  }
}
