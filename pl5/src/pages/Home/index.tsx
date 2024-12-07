import { SystemNavbar } from "../../component/NavBar";
import "./styles.css";

export function Home() {
  return (
    <section>
      <header>
        <SystemNavbar />
      </header>
      <main>
        <div className="text">
          <h1>PetLovers, O melhor é aqui!</h1>
          <h2>
            Nessa aplicação você podera fazer o controle de Clientes, Produtos,
            Serviços e o consumo dos clientes e seus pets
          </h2>
        </div>
      </main>
    </section>
  );
}
