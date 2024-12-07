import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navbar_ extends Component {
  render() {
    const navbarStyles = {
      backgroundColor: '#0099CC',
      borderBottom: '3px solid #FFFFFF', 
    };

    const brandStyles = {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#FFFFFF', 
    };

    const navLinkStyles = {
      color: '#FFFFFF',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginRight: '15px',
    };

    const dropdownItemStyles = {
      backgroundColor: '#0099CC', 
      color: '#FFFFFF',
      fontWeight: 'bold',
    };

    return (
      <Navbar style={navbarStyles} expand="lg">
        <Container>
          <Navbar.Brand style={brandStyles} href="/">
             PetLovers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={navLinkStyles}>
                Home
              </Nav.Link>
              <NavDropdown title="Listagem" id="basic-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="/clientes" style={dropdownItemStyles}>
                  Clientes
                </NavDropdown.Item>
                <NavDropdown.Item href="/produtos" style={dropdownItemStyles}>
                  Produtos
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicos" style={dropdownItemStyles}>
                  Serviços
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/consumos" style={dropdownItemStyles}>
                  Consumos
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cadastrar" id="basic-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="/cadastrar_cliente" style={dropdownItemStyles}>
                  Cliente
                </NavDropdown.Item>
                <NavDropdown.Item href="/cadastrar_produto" style={dropdownItemStyles}>
                  Produto
                </NavDropdown.Item>
                <NavDropdown.Item href="/cadastrar_servico" style={dropdownItemStyles}>
                  Serviço
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
