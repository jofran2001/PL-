export interface IUsuario {
  id: number;
  nome: string;
  email: string;
  nomeSocial: string;
  dataCadastro: Date;
  cpf: ICpf;
  rg: IRg[];
  pets: IPet[];
  endereco: IEndereco;
  telefones: ITelefone[];
  produtos: IProduto[];
  servicos: IService[];
}
export interface IEndereco {
  cliente?: number;
  id: string;
  rua: string;
  bairro: string;
  cidade: string;
  numero: string;
  codigoPostal: string;
  informacaoAdicional: string;
  estado: string;
}
export interface ICpf {
  id: number;
  valor: string;
  dataEmissao: string;
  cliente?: number;
}
export interface IRg {
  cliente?: number;
  id: number;
  valor: string;
  dataEmissao: string;
}
export interface ITelefone {
  cliente?: number;
  id: number;
  ddd: string;
  numero: string;
}

export interface IPet {
  id: number;
  cliente?: number;
  nome: string;
  raca: string;
  tipo: string;
  genero: string;
}

export interface IProduto {
  id: number;
  nome: string;
  valor: string;
}
export interface IService {
  id: number;
  nome: string;
  valor: string;
}
