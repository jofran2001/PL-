import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";
import { Empresa } from "./empresa";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;

  @Column({ type: "varchar" })
  nome!: String;

  @Column({ type: "float" })
  valor!: Number;

  @ManyToMany(() => Cliente, (cliente) => cliente.produtos)
  @JoinTable({ name: "produto_cliente" })
  cliente!: Cliente[];

  @ManyToMany(() => Empresa, (empresa) => empresa.produtos)
  @JoinTable({ name: "empresa_produto" })
  empresa!: Empresa[];

}
