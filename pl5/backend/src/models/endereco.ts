import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;
  @Column({ type: "varchar" })
  rua!: string;
  @Column({ type: "varchar" })
  bairro!: string;
  @Column({ type: "varchar" })
  cidade!: string;
  @Column({ type: "varchar" })
  codigoPostal!: string;
  @Column({ type: "varchar" })
  informacaoAdicional!: string;
  @Column({ type: "varchar" })
  estado!: string;
  @Column({ type: "varchar" })
  numero!: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.telefones)
  @JoinColumn({ name: "cliente" })
  cliente!: Cliente;
}
