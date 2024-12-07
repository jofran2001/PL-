import { Button, Table } from 'react-bootstrap';
import { api } from '../../../../service/index';
import { IUsuario } from '../../../interfaces/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SystemNavbar } from '../../../../component/NavBar';

function ConsumosUm() {
    const navigate = useNavigate()
    const [clientes, setCliente] = useState<IUsuario[]>([])
    useEffect(() => {
        getMany()
    })
    async function getMany() {
        const response = await api.get<IUsuario[]>(`cliente/achar-cliente`)
        setCliente(response.data)
    }
    let consumidores: any = []
    clientes.forEach(qnt => {
        let nomeCliente = qnt.nome
        let qntidadeConsumo = qnt.produtos.length + qnt.servicos.length
        consumidores.push({ nome: nomeCliente, quantidade: qntidadeConsumo })
    })
    let ordenacao = consumidores.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
        return b.quantidade - a.quantidade;
    });
    let restricao = ordenacao.slice(0, 9)
    return (
        <section>
            <header>
                <SystemNavbar />
            </header>
            <main>
                <div className="tables">
                    <h1>Listagem dos 10 clientes que mais consumiram produtos ou
                        serviços, em quantidade, não em valor</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restricao && restricao.map((consumido: { id: number, nome: string, quantidade: any }) => {
                                return (
                                    <tr>
                                        <td>{consumido.nome}</td>
                                        <td>{consumido.quantidade}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Button variant="outline-info" onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </main>
        </section >
    );
}

export default ConsumosUm;