/* eslint-disable react/jsx-pascal-case */
import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import NavBar_ from "../../../component/NavBar";

export class VisualizarCliente extends Component {
  render() {
    return (
      <section>
        <header>
          <NavBar_ />
        </header>
        <main>
          <h1>Ficha de "Luis Inácio Lula Da Silva"</h1>
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
              <Card.Title>Luis Inácio Lula Da Silva</Card.Title>
              <Card.Text>9 dedos</Card.Text>
              <Card.Text>CPF: 781.203.203-15</Card.Text>
              <Card.Text>[1] RG: 11.111.111/01</Card.Text>
              <Card.Text>[2] RG: 22.222.222/01</Card.Text>
              <Card.Text>[3] RG: 33.333.333/01</Card.Text>
              <Card.Text>[1] Telefone: 12 2222-1111</Card.Text>
              <Card.Text>[2] Telefone: 12 2222-2222</Card.Text>
              <Card.Text>[3] Telefone: 12 2222-2222</Card.Text>
              <Card.Text>Pets</Card.Text>
              <Card.Text>[1] Nome: Dilma Rousseff, Raça: SRD, Tipo: Cachorro, Genero: Fêmea?</Card.Text>
            </Card.Body>
          </Card>
        </main>
      </section>
    );
  }
}
