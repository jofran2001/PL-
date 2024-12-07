import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Cpf {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;

  @Column({ type: "varchar", length: 14, unique: true })
  valor!: String;

  @Column({ type: "varchar" })
  dataEmissao!: String;

  @OneToOne(() => Cliente, (cliente) => cliente.cpf)
  @JoinColumn({ name: "cliente" })
  cliente!: Cliente;
}
