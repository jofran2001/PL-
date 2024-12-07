import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { IProduto } from "../../interfaces";
import { api } from "../../../service";
export function EditarProduto() {
  const { id } = useParams()
  const [produto, setProduto] = useState({} as IProduto)
  useEffect(() => {
    async function loadProdutos() {
      await api.get<IProduto>(`/produto/achar-produtos/${id}`).then(({ data }) => setProduto(data))
    }
    loadProdutos()
  }, [id])

  const [newValues, setNewValues] = useState({} as IProduto)
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
    console.log(`/produto/editar/${id}`)
    await api.put<IProduto>(`/produto/editar-produto/${id}`, { ...newValues }).then(() => navigate("/produtos"))
  }
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
              <input type="text" value={newValues.nome || produto.nome} onChange={(event) => handleEventChange(event, 'nome')} />
            </div>
            <div className="field">
              <label htmlFor="Preco">Preço:</label>
              <input type="number" value={newValues.valor || produto.valor} onChange={(event) => handleEventChange(event, 'valor')} />
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
