/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './styles.css'

export class CadastrarClientes extends Component {
    
    render() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <h3>Cadastrar Pet</h3>
                            <label htmlFor="Telefone">Nome:</label>
                            <input type="text"/>
                            <label htmlFor="Telefone">Raça:</label>
                            <input type="text"/>
                            <label htmlFor="Telefone">Tipo:</label>
                            <input type="text"/>
                            <label htmlFor="Telefone">Genero:</label>
                            <input type="text"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
    }
}
