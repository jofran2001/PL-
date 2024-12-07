import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { IProduto } from "../../interfaces";
import { useState } from 'react'
import { api } from "../../../service";
import { useNavigate } from "react-router-dom";
export function CadastrarProdutos() {


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
    await api.post<IProduto>(`produto/cadastrar`, { ...newValues }).then(() => navigate("/produtos"))
  }

  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Cadastrar Produto</h1>
        <div className="forms">
          <form>
            <div className="field">
              <label htmlFor="Produto">Produto:</label>
              <input type="text" value={newValues.nome} onChange={(evnet) => handleEventChange(evnet, "nome")} />
            </div>
            <div className="field">
              <label htmlFor="Preco">Preço:</label>
              <input type="number" value={newValues.valor} onChange={(evnet) => handleEventChange(evnet, "valor")} />
            </div>
            <Button onClick={handleSubmit} className="submit" variant="outline-dark" type="submit">
              Cadastrar
            </Button>{" "}
          </form>
        </div>
      </main>
    </section>
  );
}
