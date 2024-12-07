export interface IUsuario {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: IEndereco;
  telefones: ITelefone[];
}
interface IEndereco {
  id: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}
interface ITelefone {
  id: number;
  ddd: string;
  numero: string;
}
