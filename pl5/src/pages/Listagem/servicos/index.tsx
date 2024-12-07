import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { IService } from "../../interfaces";
import { useState, useEffect } from 'react'
import { api } from "../../../service";
export function Servicos() {
  const [servicos, setServicos] = useState([] as IService[])

  async function loadService() {
    await api.get<IService[]>(`servico/achar-servicos`).then(({ data }) => setServicos(data))
  }
  useEffect(() => {
    loadService()
  }, [servicos])

  const handleDelete = async (id: number) => {
    await api.delete(`servico/deletar-servico/${id}`)
    loadService()
  }
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Serviços</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id</th>
                <th>Serviço</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {servicos && servicos.map((serv) => {
                return (
                  <tr>
                    <td>{serv.id}</td>
                    <td>{serv.nome}</td>
                    <td>R${serv.valor}</td>
                    <td>
                      <div className="icons">
                        <a href={`/editar_servico/${serv.id}`}>
                          <PencilSimple size={35} color="#198754" />
                        </a>
                        <a href={`/servico/${serv.id}`}>
                          <Eye size={35} color="#0DCAF0" />
                        </a>
                        <a onClick={() => { handleDelete(serv.id) }} href="##">
                          <Eraser size={35} color="#DC3545" />
                        </a>
                      </div>
                      <div className="Column">
                        <Button variant="outline-success" href={`/editar_servico/${serv.id}`}>
                          Editar
                        </Button>{" "}
                        <Button variant="outline-info" href={`/servicos/${serv.id}`}>
                          Visualizar
                        </Button>{" "}
                        <Button onClick={() => { handleDelete(serv.id) }} variant="outline-danger">Remover</Button>{" "}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}
