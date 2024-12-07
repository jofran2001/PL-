/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import Navbar_ from '../../component/NavBar';
import './styles.css';

export class Home extends Component {
    render() {
        return (
            <section>
                <header>
                    <Navbar_ />
                </header>
                <main>
                <div className="text">
                        <h1>Sistema PetLovers,</h1>
                        <h2>O melhor sistema de gerenciamento de petshop do Brasil</h2>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://s2-ge.glbimg.com/W2Zzdyk1LGOY1GRWNA6qXNQi1IM=/0x0:720x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/D/G/mhJgNzQB2TrM0UXa0G2Q/ghjvc0awqaaepjz.jpg"
                            alt="Papão"
                            className="pets-image"
                        />
                    </div>
                </main>
            </section>
        );
    }
}
