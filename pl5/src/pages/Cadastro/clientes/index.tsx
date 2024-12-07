import { Button } from "react-bootstrap";
import { SystemNavbar } from "../../../component/NavBar";
import "./styles.css";
import { useState } from "react";
import { IPet, IRg, ITelefone, IUsuario } from "../../interfaces";
import { api } from "../../../service";
import { useNavigate } from "react-router-dom";

export function CadastrarClientes() {
  const [newValues, setNewValues] = useState<IUsuario>({} as IUsuario);
  const navigate = useNavigate();
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

  const [telefones, setTelefones] = useState([] as ITelefone[]);
  const [telefone, setTelefone] = useState({ ddd: "", numero: "", id: 0 });
  const [pets, setPets] = useState([] as IPet[]);
  const [pet, setPet] = useState({ nome: "", genero: "", tipo: "", raca: "", id: 0 });
  const [rgs, setRgs] = useState([] as IRg[]);
  const [rg, setRg] = useState({ valor: "", dataEmissao: "", id: 0 });

  const handleChangePet = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setPet({
      ...pet,
      [field]: event.target.value
    });
  };
  const handleChangeTelefone = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setTelefone({
      ...telefone,
      [field]: event.target.value
    });
  };
  const handleChangeRg = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setRg({
      ...rg,
      [field]: event.target.value
    });
  };


  const handleAddTelefone = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (telefone.numero.trim() !== "") {
      setTelefones([...telefones, telefone]);
      setTelefone({ ddd: "", numero: "", id: 0 });
    }
  };
  const handleAddPet = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (pet.nome.trim() !== "") {
      setPets([...pets, pet]);
      setPet({ nome: "", genero: "", tipo: "", raca: "", id: 0 });
    }
  };
  const handleAddRg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (rg.valor.trim() !== "") {
      setRgs([...rgs, rg]);
      setRg({ valor: "", dataEmissao: "", id: 0 });
    }
  };

  const removeTelefone = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setTelefones((prevTell) => {
      const updateTelefone = [...prevTell];
      updateTelefone.splice(index, 1);
      return updateTelefone;
    });
  };

  const removePet = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setPets((remove) => {
      const updateArray = [...remove];
      updateArray.splice(index, 1);
      return updateArray;
    });
  };
  const removeRg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setRgs((remove) => {
      const updateArray = [...remove];
      updateArray.splice(index, 1);
      return updateArray;
    });
  };

  async function handleCadastro(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    await api.post(`cliente/criar-cliente`, {
      ...newValues, endereco: { ...newValues.endereco }, cpf: { ...newValues.cpf },
      pet: pets.map((i: IPet) => ({ nome: i.nome, genero: i.genero, tipo: i.tipo, raca: i.raca })),
      telefone: telefones.map((i: ITelefone) => ({ ddd: i.ddd, numero: i.numero })),
      rg: rgs.map((i: IRg) => ({ valor: i.valor, dataEmissao: i.dataEmissao })),
    }).then(() => navigate(`/clientes`))
  }
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <form className="container">
          <h1>Cadastrar Cliente</h1>
          <div className="container ">
            <div className="row justify-content-md-center ">
              <div className="col col-lg-3 border ">
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
              <div className="col-md-auto col-lg-3 border">
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
              <div className="col col-lg-3 border overflow-auto ">
                <h3 className="text-center">Pets</h3>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                  <input type="text" value={pet.nome} onChange={(event) => handleChangePet(event, 'nome')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Raça</span>
                  <input type="text" value={pet.raca} onChange={(event) => handleChangePet(event, 'raca')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Tipo</span>
                  <input type="text" value={pet.tipo} onChange={(event) => handleChangePet(event, 'tipo')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Genero</span>
                  <input type="text" value={pet.genero} onChange={(event) => handleChangePet(event, 'genero')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="d-grid gap-2 verflow-auto">
                  <button onClick={(event) => handleAddPet(event)} type="button" className="btn btn-success ">Adicionar</button>
                  {pets && pets.map((i: IPet, index) => {
                    return (
                      <div className="container d-flex justify-content-between">
                        <span>{i.nome}</span>
                        <button onClick={(event) => removePet(event, index)} type="button" className="btn btn-outline-dark btn-sm">Remove</button>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-auto p-2 col-lg-3 border">
                <h3 className="text-center">Adicionais</h3>
                <h5 className="text-center">Telefone</h5>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">ddd</span>
                  <input type="text" value={telefone.ddd} onChange={(event) => handleChangeTelefone(event, 'ddd')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">numero</span>
                  <input type="text" value={telefone.numero} onChange={(event) => handleChangeTelefone(event, 'numero')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="d-grid gap-2">
                  <button onClick={handleAddTelefone} type="button" className="btn btn-success ">Adicionar</button>
                  {telefones && telefones.map((i: ITelefone, index) => {
                    return (
                      <div className="container d-flex justify-content-between">
                        <span>{i.ddd}-{i.numero}</span>
                        <button onClick={(event) => removeTelefone(event, index)} type="button" className="btn btn-outline-dark btn-sm">Remove</button>
                      </div>
                    )
                  })}
                </div>
                <h5 className="text-center m-4">RG</h5>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Numero</span>
                  <input type="text" value={rg.valor} onChange={(event) => handleChangeRg(event, 'valor')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Data</span>
                  <input type="date" value={rg.dataEmissao} onChange={(event) => handleChangeRg(event, 'dataEmissao')} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="d-grid gap-2">
                  <button onClick={handleAddRg} type="button" className="btn btn-success ">Adicionar</button>
                  {rgs && rgs.map((i: IRg, index) => {
                    return (
                      <div className="container d-flex justify-content-between">
                        <span>{i.valor} - {i.dataEmissao}</span>
                        <button onClick={(event) => removeRg(event, index)} type="button" className="btn btn-outline-dark btn-sm">Remove</button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 m-4">
              <button onClick={handleCadastro} type="submit" className="btn btn-success ">Adicionar</button>
            </div>
          </div>
        </form>
      </main>
    </section >
  );
}