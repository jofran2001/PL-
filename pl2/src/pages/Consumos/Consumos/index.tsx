/* eslint-disable react/jsx-pascal-case */
import { Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import  NavBar_  from '../../../component/NavBar'

export class Consumos extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Consumos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem geral dos serviços mais consumidos. Quantidade</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem geral dos produtos mais consumidos. Quantidade</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
    }
}