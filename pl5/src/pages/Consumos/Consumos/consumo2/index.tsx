import { Button, Table } from 'react-bootstrap';
import { api } from '../../../../service/index';
import { IUsuario } from '../../../interfaces/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SystemNavbar } from '../../../../component/NavBar';

function ConsumosDois() {
    const navigate = useNavigate()
    const [clientes, setCliente] = useState<IUsuario[]>([])
    useEffect(() => {
        getMany()
    })
    async function getMany() {
        const response = await api.get<IUsuario[]>(`cliente/achar-cliente`)
        setCliente(response.data)
    }
    let produtosConsumidos: { [nome: string]: number } = {};
    clientes.forEach((cliente) => {
        cliente.produtos.forEach((produtos) => {
            const nome = produtos.nome;
            produtosConsumidos[nome] = (produtosConsumidos[nome] || 0) + 1;
        });
    });
    let ordenacao = Object.entries(produtosConsumidos).sort((a, b) => {
        return b[1] - a[1];
    });
    let restricao = ordenacao.slice(0, 3);
    return (
        <section>
            <header>
                <SystemNavbar />
            </header>
            <main>
                <div className="tables">
                    <h1>Listagem geral dos serviços mais consumidos. Quantidade</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restricao && restricao.map((consumidos: [string, number]) => {
                                const nome = consumidos[0];
                                const quantidade = consumidos[1];
                                return (
                                    <tr>
                                        <td>{nome}</td>
                                        <td>{quantidade}</td>
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

export default ConsumosDois;