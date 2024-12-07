import { Button, Card } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { IProduto } from "../../interfaces";
import { api } from "../../../service";
export function VisualizarProduto() {
  const { id } = useParams()
  const [produto, setProduto] = useState({} as IProduto)
  useEffect(() => {
    async function loadProdutos() {
      await api.get<IProduto>(`/produto/achar-produtos/${id}`).then(({ data }) => setProduto(data))
    }
    loadProdutos()
  }, [id])
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Visualizar Produto: "{produto.nome}"</h1>
        <Button variant="outline-dark" href="/produtos">
          Voltar
        </Button>
        <Card
          bg="white"
          text="dark"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>ID: {produto.id}</Card.Header>
          <Card.Body>
            <Card.Title>{produto.nome}</Card.Title>
            <Card.Text>Preço: R${produto.valor}</Card.Text>
          </Card.Body>
        </Card>
      </main>
    </section>
  );
}
