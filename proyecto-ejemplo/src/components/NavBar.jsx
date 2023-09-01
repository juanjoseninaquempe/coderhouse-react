import reactLogo from "../assets/react.svg";

import Button from "react-bootstrap/Button";
import FavsWidget from "./FavsWidget";
import { Link } from "react-router-dom";

function NavBar() {
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
        <Link><Button>React</Button></Link>
        <Link><Button>Angular</Button></Link>
        <Link><Button>Vue</Button></Link>
        <Link><Button>Svelte</Button> </Link>
      </nav>
      <FavsWidget />
    </header>
  );
}

export default NavBar;
