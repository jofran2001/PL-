import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: Number;

  @Column({ type: "varchar", length: 14 })
  nome!: string;

  @Column({ type: "varchar", length: 14 })
  genero!: string;

  @Column({ type: "varchar" })
  tipo!: string;

  @Column({ type: "varchar" })
  raca!: string;

  @OneToOne(() => Cliente, (cliente) => cliente.cpf)
  @JoinColumn({ name: "cliente" })
  cliente!: Cliente;
}
