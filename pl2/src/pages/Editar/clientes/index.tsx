/* eslint-disable react/jsx-pascal-case */
import { Component } from "react";
import { Button } from "react-bootstrap";
import NavBar_ from "../../../component/NavBar";

export class EditarCliente extends Component {
  render() {
    return (
      <section>
        <header>
          <NavBar_ />
        </header>
        <main>
          <h1>Editar Cliente:"Luís Inácio Lula da Silva"</h1>
          <Button variant="outline-dark" href="/clientes">
            Voltar
          </Button>
          <div className="forms">
            <form>
              <div className="field">
                <label htmlFor="Nome">Nome:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="Sobrenome">Sobrenome:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="Social">Nome social:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="rg">RG:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="Telefone">Telefone:</label>
                <input type="text" defaultValue="" />
              </div>
              <div className="field">
                <h3>Editar Pet - Dilma Rousseff</h3>
                <label htmlFor="Telefone">Nome:</label>
                <input type="text" />
                <label htmlFor="Telefone">Raça:</label>
                <input type="text" />
                <label htmlFor="Telefone">Tipo:</label>
                <input type="text" />
                <label htmlFor="Telefone">Genero:</label>
                <input type="text" />
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
