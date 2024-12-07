import { IUsuario, IService } from '../../interfaces/index';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { SystemNavbar } from '../../../component/NavBar'
import { useState, useEffect, useCallback } from 'react';
import { api } from '../../../service/';
import './styles.css'

interface IForm {
    servicoid: number;
}

function ClienteServico() {
    const navigate = useNavigate()
    const [cliente, setCliente] = useState<IUsuario>()
    const [servico, setServicco] = useState<IService[]>([])
    const { id } = useParams()
    useEffect(() => {
        getOne();
        getServico()
    })
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event: any) => {
        const newValue = event.target.value;
        setSelectedOption(newValue);
    };
    async function getOne() {
        const response = await api.get<IUsuario>(`cliente/achar-cliente/${id}`)
        setCliente(response.data)
    }
    async function getServico() {
        const response = await api.get<IService[]>(`/servico/achar-servicos`)
        setServicco(response.data)
    }
    const deletar = useCallback(
        async (idServico: number) => {
            await api.delete(`/servico/deletar-relacao-usuario/${id}/${idServico}`)
                .then(({ data }) => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, [id]
    )
    const adicionarServico = useCallback(async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        await api.post(`/servico/add-servico-cliente/${id}`, {
            servicoId: selectedOption
        }).then(({ data }) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
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
                    <Card.Header>Serviços já consumidos</Card.Header>
                    <Card.Body>
                        {cliente && cliente.servicos.map(s => {
                            return (
                                <>
                                    <Card.Text>Serviço: {s.nome}</Card.Text>
                                    <Card.Text>R${s.valor}</Card.Text>
                                    <Card.Text><Button onClick={() => deletar(s.id)}>Deletar</Button></Card.Text>
                                </>
                            )
                        })}
                    </Card.Body>
                </Card>
                <div className="forms">
                    <form >
                        <select value={selectedOption} onChange={handleOptionChange} placeholder="Selecione o serviço">
                            <option disabled value="">Selecione o serviço</option>
                            {servico && servico.map(i => (
                                <option key={i.id} value={i.id}>{i.nome}</option>
                            ))}
                        </select>
                        <Button onClick={adicionarServico} className="submit" variant="outline-dark" type='submit'>Adicionar</Button>{' '}
                    </form>
                </div>
            </main>
        </section >
    );
}
export default ClienteServico;