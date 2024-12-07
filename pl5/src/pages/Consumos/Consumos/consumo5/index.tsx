import { Button, Table } from 'react-bootstrap';
import { api } from '../../../../service/index';
import { IUsuario } from '../../../interfaces/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SystemNavbar } from '../../../../component/NavBar';

function ConsumosCinco() {
    const navigate = useNavigate()
    const [clientes, setCliente] = useState<IUsuario[]>([])
    useEffect(() => {
        getMany()
    })
    async function getMany() {
        const response = await api.get<IUsuario[]>(`cliente/achar-cliente`)
        setCliente(response.data)
    }
    let valorConsumidoProduto: any = []
    let valorConsumidoServico: any = []
    clientes.forEach((item) => {
        let id = item.id
        let name = item.nome;
        let mapValoresProdutos = item.produtos.map(i => Number(i.valor))
        let valorFinalProduto = mapValoresProdutos.reduce(function (anterior, atual) {
            return (Number(anterior) + Number(atual))
        }, 0)
        valorConsumidoProduto.push({
            id: id,
            nome: name,
            precoProduto: valorFinalProduto,
        })
    })
    clientes.forEach((item) => {
        let id = item.id
        let name = item.nome;
        let mapValoresServico = item.servicos.map(i => Number(i.valor))
        let valorFinalServico = mapValoresServico.reduce(function (anterior, atual) {
            return (Number(anterior) + Number(atual))
        }, 0)
        valorConsumidoServico.push({
            id: id,
            nome: name,
            precoServico: valorFinalServico,
        })
    })
    const ordenacaoProduto = valorConsumidoProduto?.sort((
        a: { precoProduto: number; },
        b: { precoProduto: number; }) => {
        return (b.precoProduto - a.precoProduto)
    })
    const ordenacaoServico = valorConsumidoServico?.sort((
        a: { precoServico: number; },
        b: { precoServico: number; }) => {
        return (b.precoServico - a.precoServico)
    })
    const restricaoProdutos = ordenacaoProduto.slice(0, 5)
    const restricaoServico = ordenacaoServico.slice(0, 5)

    return (
        <section>
            <header>
                <SystemNavbar />
            </header>
            <main>
                <div className="tables">
                    <h1>Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Total Produtos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restricaoProdutos && restricaoProdutos?.map((consumo: { id: number, nome: string, precoProduto: number }) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{consumo.id}</td>
                                            <td>{consumo.nome}</td>
                                            <td>R${consumo.precoProduto}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Total Serviços</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restricaoServico && restricaoServico?.map((consumo: { id: number, nome: string, precoServico: number }) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{consumo.id}</td>
                                            <td>{consumo.nome}</td>
                                            <td>R${consumo.precoServico}</td>
                                        </tr>
                                    </>
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

export default ConsumosCinco;