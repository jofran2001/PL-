import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./cliente";
import { Produto } from "./produto";
import { Servico } from "./servico";

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;

  @Column({ type: "varchar" })
  nome!: string;
  @ManyToMany(() => Cliente, (cliente) => cliente.empresa)
  @JoinTable({ name: "empresa_cliente" })
  cliente!: Cliente[];
  @ManyToMany(() => Servico, (servicos) => servicos.empresa)
  @JoinTable({ name: "empresa_servico" })
  servicos!: Servico[];
  @ManyToMany(() => Produto, (produtos) => produtos.empresa)
  @JoinTable({ name: "empresa_produto" })
  produtos!: Produto[];
}
