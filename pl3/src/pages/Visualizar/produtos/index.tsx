import { Button, Card } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function VisualizarProduto() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Visualizar Produto: "Caminha Tamanho GG"</h1>
        <Button variant="outline-dark" href="/produtos">
          Voltar
        </Button>
        <Card
          bg="white"
          text="dark"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>ID: 1</Card.Header>
          <Card.Body>
            <Card.Title>Caminha Tamanho GG</Card.Title>
            <Card.Text>Preço: R$15</Card.Text>
          </Card.Body>
        </Card>
      </main>
    </section>
  );
}
