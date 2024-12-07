import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { api } from "../../../service";
import { IUsuario } from "../../interfaces";

export function EditarCliente() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<IUsuario>();
  const navigate = useNavigate();
  const [newValues, setNewValues] = useState<IUsuario>({} as IUsuario);

  useEffect(() => {
    async function loadInfos() {
      await api
        .get(`cliente/${id}`, {
          validateStatus: function (status) {
            return true;
          },
        })
        .then(({ data }) => {
          setUsuario(data);
          const mappedTelefones = data.telefones?.map(
            (i: any) => String(i.ddd) +" "+ String(i.numero)
          );
          setTelefones(mappedTelefones || []);
        });
    }
    loadInfos();
  }, [id]);

  const handleEventChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    campo: string
  ) => {
    if (campo.includes(".")) {
      const end = campo.split(".");
      setNewValues({
        ...newValues,
        endereco: { ...newValues.endereco, [end[1]]: event.target.value },
      });
    } else {
      setNewValues({ ...newValues, [campo]: event.target.value });
    }
  };

  const [telefones, setTelefones] = useState<string[]>([]);
  const [telefone, setTelefone] = useState({
    text: "",
  });

  const handleChangeTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone({ text: event.target.value });
  };

  const handleAddTelefone = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (telefone.text.trim() !== "") {
      const newTell = [...telefones, telefone.text];
      setTelefones(newTell);
      setTelefone({ text: "" });
    }
  };

  const removeTelefone = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setTelefones((prevTell) => {
      const updateTelefone = [...prevTell];
      updateTelefone.splice(index, 1);
      return updateTelefone;
    });
  };

  async function handleUpdateUser(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    await api
      .put(`cliente/atualizar`, {
        ...newValues,
        endereco: {
          ...newValues.endereco,
          id: usuario?.endereco.id,
        },
        telefones:
          telefones.map((tell: string) => {
            const formatTell = tell.split(" ");
            console.log(formatTell);
            if (formatTell.length === 2) {
              return { ddd: formatTell[0], numero: formatTell[1] };
            } else {
              return { ddd: "00", numero: tell };
            }
          }) || [],
        id: id,
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
          <form>
            <div className="field">
              <label htmlFor="Nome">Nome Completo:</label>
              <input
                type="text"
                defaultValue={usuario?.nome}
                value={newValues.nome || usuario?.nome}
                onChange={(event) => handleEventChange(event, "nome")}
              />
            </div>
            <div className="field">
              <label htmlFor="rg">Email:</label>
              <input
                type="text"
                defaultValue={usuario?.email}
                value={newValues.email || usuario?.email}
                onChange={(event) => handleEventChange(event, "email")}
              />
            </div>
            <div className="field">
              <label htmlFor="Social">Nome social:</label>
              <input
                type="text"
                defaultValue={usuario?.nomeSocial}
                value={newValues.nomeSocial || usuario?.nomeSocial}
                onChange={(event) => handleEventChange(event, "nomeSocial")}
              />
            </div>
            <label htmlFor="Telefone">Telefone:</label>
            <div className="container-fluid align-items-center">
              <div className="field">
                <input
                  className="m-3"
                  type="text"
                  placeholder="DDD NUMERO"
                  value={telefone.text || ""}
                  onChange={handleChangeTelefone}
                />
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={(event) => handleAddTelefone(event)}
                >
                  Adicionar telefone
                </button>
              </div>
              {telefones &&
                telefones.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="container-fluid d-flex justify-content-evenly align-items-center m-2"
                    >
                      <h2 className="fs-5">{i}</h2>
                      <button
                        onClick={(event) => removeTelefone(event, index)}
                        type="button"
                        className="btn btn-outline-danger"
                      >
                        X
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="field">
              <h3>Editar Endereço</h3>
              <label htmlFor="Estado">Estado:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.estado}
                value={newValues?.endereco?.estado}
                onChange={(event) =>
                  handleEventChange(event, "endereco.estado")
                }
              />
              <label htmlFor="Cidade">Cidade:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.cidade}
                value={newValues?.endereco?.cidade}
                onChange={(event) =>
                  handleEventChange(event, "endereco.cidade")
                }
              />
              <label htmlFor="Bairro">Bairro:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco.bairro}
                value={newValues?.endereco?.bairro}
                onChange={(event) =>
                  handleEventChange(event, "endereco.bairro")
                }
              />
              <label htmlFor="Rua">Rua:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.rua}
                value={newValues?.endereco?.rua}
                onChange={(event) => handleEventChange(event, "endereco.rua")}
              />
              <label htmlFor="Numero">Numero:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.numero}
                value={newValues?.endereco?.numero}
                onChange={(event) =>
                  handleEventChange(event, "endereco.numero")
                }
              />
              <label htmlFor="CodigoPostal">Codigo Postal:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.codigoPostal}
                value={newValues?.endereco?.codigoPostal}
                onChange={(event) =>
                  handleEventChange(event, "endereco.codigoPostal")
                }
              />
              <label htmlFor="InformaçãoAdicional">Informação Adicional:</label>
              <input
                type="text"
                defaultValue={usuario?.endereco?.informacoesAdicionais}
                value={newValues?.endereco?.informacoesAdicionais}
                onChange={(event) =>
                  handleEventChange(event, "endereco.informacoesAdicionais")
                }
              />
            </div>
            <Button
              onClick={handleUpdateUser}
              className="submit"
              variant="outline-dark"
              type="submit"
            >
              Atualizar
            </Button>{" "}
          </form>
        </div>
      </main>
    </section>
  );
}
