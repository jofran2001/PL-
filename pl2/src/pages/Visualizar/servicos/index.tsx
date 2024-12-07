/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

export class VisualizarServico extends Component {
    render(){

        return(
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Visualizar Serviço: "Banho"</h1>
                <Button variant="outline-dark" href='/servicos'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Banho</Card.Title>
                        <Card.Text>
                            Preço: R$20
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
}
};