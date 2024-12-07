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
          <h1>Sistema PetLovers</h1>
          <h2>
            O melhor sistema de gerenciamento de PetShops do Brasil
          </h2>
        </div>
      </main>
    </section>
  );
}
