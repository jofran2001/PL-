import { Button, Card } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { IService } from "../../interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { api } from "../../../service";
export function VisualizarServico() {
  const { id } = useParams()
  const [service, setService] = useState({} as IService)
  useEffect(() => {
    async function loadService() {
      await api.get<IService>(`servico/achar-servicos/${id}`).then(({ data }) => setService(data))
    }
    loadService()
  }, [id])
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Visualizar Serviço: "{service.nome}"</h1>
        <Button variant="outline-dark" href="/servicos">
          Voltar
        </Button>
        <Card
          bg="white"
          text="dark"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>ID: {service.id}</Card.Header>
          <Card.Body>
            <Card.Title>{service.nome}</Card.Title>
            <Card.Text>Preço: R${service.valor}</Card.Text>
          </Card.Body>
        </Card>
      </main>
    </section>
  );
}
