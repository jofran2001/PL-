import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import "./styles.css";

export function CadastrarClientes() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Cadastrar Cliente</h1>
        <div className="forms">
          <form>
            <div className="field">
              <label htmlFor="Nome">Nome Completo:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="rg">Email:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="Social">Nome social:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="Telefone">Telefone:</label>
              <input type="text" />
            </div>
            <div className="field">
              <h3>Cadastrar Endereço</h3>
              <label htmlFor="Estado">Estado:</label>
              <input type="text" />
              <label htmlFor="Cidade">Cidade:</label>
              <input type="text" />
              <label htmlFor="Bairro">Bairro:</label>
              <input type="text" />
              <label htmlFor="Rua">Rua:</label>
              <input type="text" />
              <label htmlFor="Numero">Numero:</label>
              <input type="text" />
              <label htmlFor="CodigoPostal">Codigo Postal:</label>
              <input type="text" />
              <label htmlFor="InformaçãoAdicional">Informação Adicional:</label>
              <input type="text" />
            </div>
            <Button className="submit" variant="outline-dark" type="submit">
              Cadastrar
            </Button>{" "}
          </form>
        </div>
      </main>
    </section>
  );
}
