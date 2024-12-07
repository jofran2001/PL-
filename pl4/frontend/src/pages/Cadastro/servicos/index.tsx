import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function CadastrarServico() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Cadastrar Serviço</h1>
        <div className="forms">
          <form>
            <div className="field">
              <label htmlFor="Servico">Serviço:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="Preco">Preço:</label>
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
