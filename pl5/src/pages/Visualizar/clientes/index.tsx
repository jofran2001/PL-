import { Button, Card } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../service";
import { IUsuario } from "../../interfaces";

export function VisualizarCliente() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<IUsuario>();
  useEffect(() => {
    async function loadUserInfo() {
      await api
        .get(`cliente/achar-cliente/${id}`, {
          validateStatus: function (status) {
            return true;
          },
        })
        .then((res) => setUsuario(res.data));
    }
    loadUserInfo();
  }, [id]);

  console.log(usuario)
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Ficha de "{usuario?.nome}"</h1>
        <Button variant="outline-dark" href="/clientes">
          Voltar
        </Button>
        <Card
          bg="white"
          text="dark"
          style={{ width: "25rem" }}
          className="mb-2"
        >
          <Card.Header>ID: {usuario?.id}</Card.Header>
          <Card.Body>
            <Card.Title>Nome: {usuario?.nome}</Card.Title>
            <Card.Text>Nome social: {usuario?.nomeSocial}</Card.Text>
            <Card.Text>Email: {usuario?.email}</Card.Text>
            <Card.Title>CPf</Card.Title>
            <Card.Text>Numero: {usuario?.cpf?.valor}</Card.Text>
            <Card.Text>Data de emissão: {usuario?.cpf?.dataEmissao}</Card.Text>
            <Card.Title>Endereço</Card.Title>
            <Card.Text>Cidade: {usuario?.endereco?.cidade}</Card.Text>
            <Card.Text>Estado: {usuario?.endereco?.estado}</Card.Text>
            <Card.Text>Bairro: {usuario?.endereco?.bairro}</Card.Text>
            <Card.Text>Numero: {usuario?.endereco?.numero}</Card.Text>
            <Card.Text>Rua: {usuario?.endereco?.rua}</Card.Text>
            <Card.Text>
              Codigo Posta: {usuario?.endereco?.codigoPostal}
            </Card.Text>
            <Card.Text>
              Informação Adicional: {usuario?.endereco?.informacaoAdicional}{" "}
            </Card.Text>
            <Card.Title>Telefones</Card.Title>
            {usuario?.telefones && usuario?.telefones.map((telefone) => {
              return (<Card.Text>{telefone.ddd} - {telefone.numero}</Card.Text>);
            })}
            <Card.Title>Rg</Card.Title>
            {usuario?.rg && usuario?.rg.map((rg) => {
              return (<Card.Text>{rg.valor} - {rg.dataEmissao}</Card.Text>);
            })}
            <Card.Title>Pets</Card.Title>
            {usuario?.pets && usuario?.pets.map((pet) => {
              return (
                <>
                  <Card.Text>Nome: {pet.nome}</Card.Text>
                  <Card.Text>Raça: {pet.raca}</Card.Text>
                  <Card.Text>Tipo: {pet.tipo}</Card.Text>
                  <Card.Text>Genero: {pet.genero}</Card.Text>
                </>);
            })}
          </Card.Body>
        </Card>
      </main>
    </section>
  );
}
