import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";
import { Input } from "../Input"

export function Header() {
  return (
    <Container>

      <div className="content">
        <span>RocketMovies</span>
        <Input placeholder="Pesquisar pelo título" />
        <Profile>
          <div>
            <Link to="/profile">
              <strong>
                Victor Barros
              </strong>
            </Link>
            <Link to="/">sair</Link>
          </div>
          <Link to="/profile">
            <img src="https://github.com/victorcbb.png" alt="Imagem do perfil do usuário" />
          </Link>
        </Profile>
      </div>

    </Container>
  )
}