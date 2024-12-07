import { Button, Card } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";

export function VisualizarCliente() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Ficha de "Eufrasia da Silva"</h1>
        <Button variant="outline-dark" href="/clientes">
          Voltar
        </Button>
        <Card
          bg="white"
          text="dark"
          style={{ width: "35rem" }}
          className="mb-2"
        >
          <Card.Header>ID: 1</Card.Header>
          <Card.Body>
            <Card.Title>Eufrásia da Silva</Card.Title>
            <Card.Text>Eufrásia</Card.Text>
            <Card.Text>CPF: 781.203.203-15</Card.Text>
            <Card.Title>Endereço</Card.Title>
            <Card.Text>Cidade: Cidade A</Card.Text>
            <Card.Text>Bairro: Bairro A</Card.Text>
            <Card.Text>Rua:  Rua A</Card.Text>
            <Card.Text>Codigo Posta: Cod A</Card.Text>
            <Card.Text>Informação Adicional: Info. Adicional A </Card.Text>
            <Card.Title>Telefones</Card.Title>
            <Card.Text>Tell [1] - (11)11111-1111</Card.Text>
            <Card.Text>Tell [2] - (22)22222-2222</Card.Text>
          </Card.Body>
        </Card>
      </main>
    </section>
  );
}