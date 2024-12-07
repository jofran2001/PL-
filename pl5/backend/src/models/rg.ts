import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Rg {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;

  @Column({ type: "varchar", length: 14, unique: true })
  valor!: String;

  @Column({ type: "varchar" })
  dataEmissao!: String;

  @ManyToOne(() => Cliente, (cliente) => cliente.rg)
  @JoinColumn({ name: "cliente" })
  cliente!: Cliente;
}
