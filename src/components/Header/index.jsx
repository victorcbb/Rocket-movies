import { Link, useNavigate } from "react-router-dom"

import { Container, Profile } from "./styles"
import { useAuth } from "../../hook/useAuth"
import { api } from "../../services/api"
import { Input } from "../Input"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header() {
  const { signOut, user, setSearch } = useAuth()

  const avatarUrl = user.avatar ?
  `${api.defaults.baseURL}/files/${user.avatar}` :
  avatarPlaceholder

  const navigate = useNavigate()

  function handleSignOut() {

    navigate("/")
    signOut()
  }

  return (
    <Container>

      <div className="content">
        <span>RocketMovies</span>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
        <Profile>
          <div>
            <Link to="/profile">
              <strong>
                {user.name}
              </strong>
            </Link>
            <button type="button" onClick={handleSignOut}>
              sair
            </button>
          </div>
          <Link to="/profile">
              <img 
                src={avatarUrl} 
                alt={`Imagem do perfil de usuário de ${user.name}`} 
              />
          </Link>
        </Profile>
      </div>

    </Container>
  )
}