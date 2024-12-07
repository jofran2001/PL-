import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { IService } from "../../interfaces";
import { api } from "../../../service";
export function EditarServico() {
  const { id } = useParams()
  const [service, setService] = useState({} as IService)
  useEffect(() => {
    async function loadProdutos() {
      await api.get<IService>(`servico/achar-servicos/${id}`).then(({ data }) => setService(data))
    }
    loadProdutos()
  }, [id])
  const [newValues, setNewValues] = useState({} as IService)
  const navigate = useNavigate()

  const handleEventChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    campo: string
  ) => {
    setNewValues({ ...newValues, [campo]: event.target.value });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await api.put<IService>(`servico/editar-servico/${id}`, { ...newValues }).then(() => navigate("/servicos"))
  }
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Editar Serviço</h1>
        <Button variant="outline-dark" href="/Servicos">
          Voltar
        </Button>
        <div className="forms">
          <form>
            <div className="field">
              <label htmlFor="Produto">Serviço:</label>
              <input type="text" defaultValue="" value={newValues.nome || service.nome} onChange={(event) => handleEventChange(event, 'nome')} />
            </div>
            <div className="field">
              <label htmlFor="Preco">Preço:</label>
              <input type="number" defaultValue="" value={newValues.valor || service.valor} onChange={(event) => handleEventChange(event, 'valor')} />
            </div>
            <Button onClick={handleSubmit} className="submit" variant="outline-dark" type="submit">
              Editar
            </Button>{" "}
          </form>
        </div>
      </main>
    </section>
  );
}
