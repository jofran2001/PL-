import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Telefone {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;
  @Column({ type: "varchar" })
  ddd!: String;
  @Column({ type: "varchar" })
  numero!: String;

  @ManyToOne(() => Cliente, (cliente) => cliente.telefones)
  @JoinColumn({ name: "cliente" })
  cliente!: Cliente;
}
