import { IProduto, IUsuario } from '../../interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { SystemNavbar } from '../../../component/NavBar'
import { useState, useEffect, useCallback } from 'react';
import { api } from '../../../service/index';
import './styles.css'

interface IForm {
    produtoid: number;
}

function ClienteProduto() {
    const navigate = useNavigate()
    const [cliente, setCliente] = useState<IUsuario>()
    const [produto, setProduto] = useState<IProduto[]>([])
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event: any) => {
        const newValue = event.target.value;
        setSelectedOption(newValue);
    };
    const { id } = useParams()
    useEffect(() => {
        getOne();
        getProduto()
    })
    async function getOne() {
        const response = await api.get<IUsuario>(`cliente/achar-cliente/${id}`)
        setCliente(response.data)
    }
    async function getProduto() {
        const response = await api.get<IProduto[]>(`/produto/achar-produtos`)
        setProduto(response.data)
    }
    const deletar = useCallback(
        async (idProduto: number) => {
            await api.delete(`/produto/deletar-relacao/${id}/${idProduto}`)
                .then(({ data }) => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, [id]
    )
    const adicionarProduto = useCallback(async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        await api.post(`/produto/add-produto-cliente/${id}`, {
            produtosProdutoId: selectedOption
        }).then(({ data }) => {
            console.log(data);
        })
            .catch(error => {
                console.log(error);
                alert("Cliente já tem esse produto!");
            });
    }, [id, selectedOption])

    return (
        <section>
            <header>
                <SystemNavbar />
            </header>
            <main>
                <h1>Cliente : {cliente && cliente.nome}</h1>
                <Button variant="outline-info" onClick={() => navigate(-1)}>Voltar</Button>{' '}
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header> Produtos já consumidos</Card.Header>
                    <Card.Body>
                        {cliente && cliente.produtos.map(s => {
                            return (
                                <>
                                    <Card.Text>Produto: {s.nome}</Card.Text>
                                    <Card.Text>R${s.valor}</Card.Text>
                                    <Card.Text><Button onClick={() => deletar(s.id)}>Deletar</Button></Card.Text>
                                </>
                            )
                        })}
                    </Card.Body>
                </Card>

                <h1>Adicionar Novo Produto</h1>
                <div className="forms">
                    <form >
                        <select value={selectedOption} onChange={handleOptionChange} placeholder="Selecione o serviço">
                            <option disabled value="">Selecione o Produto</option>
                            {produto && produto.map(i => (
                                <option key={i.id} value={i.id}>{i.nome}</option>
                            ))}
                        </select>
                        <Button onClick={adicionarProduto} className="submit" variant="outline-dark" type='submit'>Adicionar</Button>{' '}
                    </form>
                </div>
            </main>
        </section >
    );
}
export default ClienteProduto;