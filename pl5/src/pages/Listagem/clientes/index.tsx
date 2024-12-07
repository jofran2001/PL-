import { PencilSimple, Eraser, Eye, ListPlus } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import "./styles.css";
import { useEffect, useState } from "react";
import { IUsuario } from "../../interfaces";
import { api } from "../../../service";

export function Clientes() {
  const [usuarios, setUsuarios] = useState([] as IUsuario[]);

  async function loadUser() {
    try {
      await api
        .get<IUsuario[]>("cliente/achar-cliente", {
          validateStatus: function (status) {
            return true;
          },
        })
        .then((res: any) => setUsuarios(res.data));
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(params: number) {
    await api.delete<IUsuario>(`cliente/deletar-cliente/${params}`);
    loadUser()
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Clientes</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Nome Social</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => {
                return (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.nomeSocial}</td>
                    <td>
                      <div className="icons">
                        <a href={`/editar_cliente/${usuario.id}`}>
                          <PencilSimple size={35} color="#198754" />
                        </a>
                        <a href={`/clientes/${usuario.id}`}>
                          <Eye size={35} color="#0DCAF0" />
                        </a>
                        <a href={`cadastrar_produto/${usuario.id}`}><ListPlus size={35} color="#0DCAF0" alt='Adicionar Produtos' /></a>
                        <a href={`cadastrar_produto_servico/${usuario.id}`}><ListPlus size={35} color="#0DCAF0" alt='Adicionar Serviços' /></a>
                        <a onClick={() => deleteUser(usuario.id)} href="##">
                          <Eraser size={35} color="#DC3545" />
                        </a>
                      </div>
                      <div className="Column">
                        <Button
                          variant="outline-success"
                          href={`/editar_cliente/${usuario.id}`}
                        >
                          Editar
                        </Button>{" "}
                        <Button
                          variant="outline-info"
                          href={`/clientes/${usuario.id}`}
                        >
                          Visualizar
                        </Button>{" "}
                        <Button variant="outline-info" href={`/cadastrar_produto/${usuario.id}`}>Adicionar Produtos</Button>{' '}
                        <Button variant="outline-info" href={`/cadastrar_produto_servico/${usuario.id}`}>Adicionar Serviços</Button>{' '}
                        <Button
                          onClick={() => deleteUser(usuario.id)}
                          variant="outline-danger"
                        >
                          Remover
                        </Button>{" "}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}
