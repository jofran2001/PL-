import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";
import { Empresa } from "./empresa";

@Entity()
export class Servico {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;
  @Column({ type: "varchar" })
  nome!: String;
  @Column({ type: "float" })
  valor!: Number;

  @ManyToMany(() => Cliente, (cliente) => cliente.servicos)
  @JoinTable({ name: "cliente_servico" })
  cliente!: Cliente[];

  @ManyToMany(() => Empresa, (empresa) => empresa.servicos)
  @JoinTable({ name: "empresa_servico" })
  empresa!: Empresa[];
}
