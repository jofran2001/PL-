export interface ICliente {
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
  produtos: IProdutos[];
  servicos: IServicos[];
  empresa: IEmpresa[];
}
export interface IEndereco {
  cliente: number;
  id: string;
  rua: string;
  bairro: string;
  cidade: string;
  codigoPostal: string;
  informacaoAdicional: string;
  estado: string;
}
export interface ICpf {
  cliente: number;
  id: number;
  valor: string;
  dataEmissao: string;
}
export interface IRg {
  cliente: number;
  id: number;
  valor: string;
  dataEmissao: string;
}
export interface ITelefone {
  cliente: number;
  id: number;
  ddd: string;
  numero: string;
}

export interface IPet {
  nome: string;
  raca: string;
  cliente: number;
  tipo: string;
  genero: string;
}

export interface IProdutos {
  id: number;
  nome: string;
  valor: string;
}
export interface IServicos {
  id: number;
  nome: string;
  valor: string;
}

export interface IEmpresa {
  id: number;
  nome: string;
}
