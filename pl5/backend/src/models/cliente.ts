import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cpf } from "./cpf";
import { Empresa } from "./empresa";
import { Produto } from "./produto";
import { Rg } from "./rg";
import { Servico } from "./servico";
import { Telefone } from "./telefone";
import { Pet } from "./pet";
import { Endereco } from "./endereco";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;
  @Column({ type: "varchar", unique: true })
  email!: String;
  @Column({ type: "varchar" })
  nome!: String;
  @Column({ type: "varchar", nullable: true })
  nomeSocial!: String;
  @CreateDateColumn({ type: "datetime" })
  dataCadastro!: Date;

  @OneToOne(() => Cpf, (cpf) => cpf.cliente)
  cpf!: Cpf;
  @OneToOne(() => Endereco, (endereco) => endereco.cliente)
  endereco!: Endereco;
  @OneToMany(() => Rg, (rg) => rg.cliente)
  rg!: Rg;
  @OneToMany(() => Telefone, (telefones) => telefones.cliente)
  telefones!: Telefone;
  @OneToMany(() => Pet, (pets) => pets.cliente)
  pets!: Pet;
  @ManyToMany(() => Produto, (produtos) => produtos.cliente)
  @JoinTable({
    name: "produto_cliente",
  })
  produtos!: Produto[];
  @ManyToMany(() => Servico, (servicos) => servicos.cliente)
  @JoinTable({
    name: "servico_cliente",
  })
  servicos!: Servico[];
  @ManyToMany(() => Empresa, (empresa) => empresa.cliente)
  @JoinTable({
    name: "empresa_cliente",
  })
  empresa!: Empresa[];
}
