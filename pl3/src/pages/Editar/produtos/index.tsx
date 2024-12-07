import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function EditarProduto() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Editar Produto</h1>
        <Button variant="outline-dark" href="/Produtos">
          Voltar
        </Button>
        <div className="forms">
          <form>
            <div className="field">
              <label htmlFor="Produto">Produto:</label>
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
