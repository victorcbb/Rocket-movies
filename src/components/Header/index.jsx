import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <span>RocketMovies</span>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <a href="/profile">
            <strong>
              Victor Barros
            </strong>
          </a>
          <a href="/">sair</a>
        </div>
        <a href="/profile">
          <img src="https://github.com/victorcbb.png" alt="Imagem do perfil do usuário" />
        </a>
      </Profile>
    </Container>
  )
}