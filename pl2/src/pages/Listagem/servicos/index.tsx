/* eslint-disable react/jsx-pascal-case */
import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

export class Servicos extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Serviços</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Serviço</th>
                            <th>Preço</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Banho</td>
                                <td>R$20</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/servicos/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}
                                        <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}
                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tosa</td>
                                <td>R$50</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Consulta Veterinária</td>
                                <td>R$120</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        <Button variant="outline-danger">Remover</Button>{' '}
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