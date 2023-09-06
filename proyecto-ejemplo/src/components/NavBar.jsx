import reactLogo from "../assets/react.svg";
import Button from "react-bootstrap/Button";
import FavsWidget from "./FavsWidget";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/client";

function NavBar() {

  const handleClickEnviarDatos = ()  => {
    const ordersRef = collection(firestore,"orders")

    const data = {
      buyer: {
        email: "adri@caten.com",
        name: "Adriano",
        phone: "231342342354",
      },
      items: [
        {
        id: 1,
        price: 100,
        title: "Remera",
        quantity: 1,
        },
        {
          id: 2,
          price: 55,
          title: "Short",
          quantity: 1,
          }
      ],
      total: 155,
    };

    addDoc(ordersRef, data).then((newDocRef) => console.log(newDocRef))
  } 

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: "2rem",
        paddingInline: "1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link to="/">
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img alt="Brand" src={reactLogo} />
            <h3>Nerdticias!</h3>
          </span>
        </Link>
        <Link to="/category/react">
          <Button>React</Button>
        </Link>
        <Link to="/category/angular">
          <Button>Angular</Button>
        </Link>
        <Link to="/category/vue">
          <Button>Vue</Button>
        </Link>
        <Link to="/category/svelte">
          <Button>Svelte</Button>
        </Link>
      </nav>
      <Button onClick={handleClickEnviarDatos}>Enviar datos</Button>
      <FavsWidget />
    </header>
  );
}

export default NavBar;
