import { Link } from "react-router-dom";

const categorias = ["Pantalones", "Remeras", "Buzos"];

function App() {
  return (
    <main>
      <nav>
        <span>
          Categorias
          {categorias.map((categoria) => (
            <Link key={categoria} to={`/categorias/${categoria}`}>
              <button>{categoria}</button>
            </Link>
          ))}
        </span>
        <Link to="/productos">
          <button>Productos</button>
        </Link>
      </nav>
    </main>
  );
}

export default App;
