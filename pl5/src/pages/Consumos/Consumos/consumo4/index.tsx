import { Button, Table } from 'react-bootstrap';
import { api } from '../../../../service/index';
import { IUsuario } from '../../../interfaces/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SystemNavbar } from '../../../../component/NavBar';

function ConsumosQuatro() {
    const navigate = useNavigate()
    const [clientes, setCliente] = useState<IUsuario[]>([])
    useEffect(() => {
        getMany()
    })
    async function getMany() {
        const response = await api.get<IUsuario[]>(`cliente/achar-cliente`)
        setCliente(response.data)
    }
    const consumoPorRaca: { [raca: string]: { tipo: string; produtos: string[]; servicos: string[] } } = {};

    clientes.forEach((cliente) => {
        cliente.pets.forEach((pet) => {
            const raca = pet.raca;
            const tipo = pet.tipo;
            const servicosConsumidos = cliente.servicos.map((servico) => servico.nome);
            const produtosConsumidos = cliente.produtos.map((produto) => produto.nome);

            if (!consumoPorRaca[raca]) {
                consumoPorRaca[raca] = { tipo: "", produtos: [], servicos: [] };
            }

            consumoPorRaca[raca].tipo = tipo;
            consumoPorRaca[raca].produtos.push(...produtosConsumidos);
            consumoPorRaca[raca].servicos.push(...servicosConsumidos);
        });
    });

    function listarItensMaisConsumidos(itens: string[], quantidade: number): JSX.Element[] {
        const itemCount: { [item: string]: number } = {};
        itens.forEach((item) => {
            if (!itemCount[item]) {
                itemCount[item] = 0;
            }
            itemCount[item]++;
        });

        const ordenacao = Object.entries(itemCount).sort((a, b) => {
            return b[1] - a[1];
        });

        const restricao = ordenacao.slice(0, quantidade);

        return restricao.map(([item, quantidade], index) => (
            <div key={index}>
                {`${index + 1}. ${item} - Quantidade: ${quantidade}`}
            </div>
        ));
    }


    return (
        <section>
            <header>
                <SystemNavbar />
            </header>
            <main>
                <div className="tables">
                    <h1>Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Raça</th>
                                <th>Tipo</th>
                                <th>Produtos consumidos</th>
                                <th>Servicos consumidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consumoPorRaca && Object.keys(consumoPorRaca).map((key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{consumoPorRaca[key].tipo}</td>
                                        <td>{listarItensMaisConsumidos(consumoPorRaca[key].produtos, 3)}</td>
                                        <td>{listarItensMaisConsumidos(consumoPorRaca[key].servicos, 3)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Button variant="outline-info" onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </main>
        </section >
    );
}

export default ConsumosQuatro;