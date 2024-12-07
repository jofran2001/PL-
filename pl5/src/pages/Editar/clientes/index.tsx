import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { api } from "../../../service";
import { IPet, IRg, ITelefone, IUsuario } from "../../interfaces";

export function EditarCliente() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<IUsuario>();
  const navigate = useNavigate();
  const [newValues, setNewValues] = useState<IUsuario>({} as IUsuario);

  useEffect(() => {
    async function loadInfos() {
      await api
        .get(`cliente/achar-cliente/${id}`, {
          validateStatus: function (status) {
            return true;
          },
        })
        .then(({ data }) => {
          setUsuario(data);
        });
    }
    loadInfos();
  }, [id]);

  const handleEventChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    campo: string
  ) => {
    if (campo.includes(".")) {
      const field = campo.split(".");
      if (field[0] === 'cpf') {
        setNewValues({
          ...newValues,
          cpf: { ...newValues.cpf, [field[1]]: event.target.value },
        });
      } else if (field[0] === 'endereco') {
        setNewValues({
          ...newValues,
          endereco: { ...newValues.endereco, [field[1]]: event.target.value },
        });
      }
    } else {
      setNewValues({ ...newValues, [campo]: event.target.value });
    }
  };


  async function handleUpdateUser(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    await api
      .put(`cliente/atualizar-cliente/${id}`, {
        nome: newValues.nome || usuario?.nome,
        nomeSocial: newValues.nomeSocial || usuario?.nomeSocial,
        email: newValues.email || usuario?.email,
        endereco: { cidade: newValues?.endereco?.cidade || usuario?.endereco.cidade, estado: newValues?.endereco?.estado || usuario?.endereco.estado, bairro: newValues?.endereco?.bairro || usuario?.endereco.bairro, rua: newValues?.endereco?.rua || usuario?.endereco.rua, numero: newValues?.endereco?.numero || usuario?.endereco.numero, informacaoAdicional: newValues?.endereco?.informacaoAdicional || usuario?.endereco.informacaoAdicional, codigoPostal: newValues?.endereco?.codigoPostal || usuario?.endereco.codigoPostal, id: usuario?.endereco.id },
        cpf: { valor: newValues?.cpf?.valor || usuario?.cpf?.valor, dataEmissao: newValues?.cpf?.dataEmissao || usuario?.cpf?.dataEmissao, id: usuario?.cpf.id },
      })
      .then(() => navigate(`/clientes`));
  }



  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <h1>Editar Cliente:"{usuario?.nome}"</h1>
        <Button variant="outline-dark" href="/clientes">
          Voltar
        </Button>
        <div className="forms">
          <form className="container">
            <h1>Cadastrar Cliente</h1>
            <div className="container ">
              <div className="row justify-content-md-center ">
                <div className="col col-lg-6 border ">
                  <h3 className="text-center" >Informações Basicas</h3>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                    <input value={newValues?.nome} onChange={(event) => handleEventChange(event, "nome")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nome Social</span>
                    <input value={newValues?.nomeSocial} onChange={(event) => handleEventChange(event, "nomeSocial")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input value={newValues?.email} onChange={(event) => handleEventChange(event, "email")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <h5 className="text-center">CPF</h5>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Numero</span>
                    <input value={newValues?.cpf?.valor} onChange={(event) => handleEventChange(event, "cpf.valor")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Data</span>
                    <input value={newValues?.cpf?.dataEmissao} onChange={(event) => handleEventChange(event, "cpf.dataEmissao")} type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                </div>
                <div className="col-md-auto col-lg-6 border">
                  <h3 className="text-center">Endereço</h3>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                    <input value={newValues?.endereco?.cidade} onChange={(event) => handleEventChange(event, "endereco.cidade")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Estado</span>
                    <input value={newValues?.endereco?.estado} onChange={(event) => handleEventChange(event, "endereco.estado")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Bairro</span>
                    <input value={newValues?.endereco?.bairro} onChange={(event) => handleEventChange(event, "endereco.bairro")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Rua</span>
                    <input value={newValues?.endereco?.rua} onChange={(event) => handleEventChange(event, "endereco.rua")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Numero</span>
                    <input value={newValues?.endereco?.numero} onChange={(event) => handleEventChange(event, "endereco.numero")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Info. Adicional</span>
                    <input value={newValues?.endereco?.informacaoAdicional} onChange={(event) => handleEventChange(event, "endereco.informacaoAdicional")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Codigo Postal</span>
                    <input value={newValues?.endereco?.codigoPostal} onChange={(event) => handleEventChange(event, "endereco.codigoPostal")} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 m-4">
                <button onClick={handleUpdateUser} type="submit" className="btn btn-success ">Adicionar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}
