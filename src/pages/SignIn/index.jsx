import { Link } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"
import { Background, Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          type="email" 
          icon={FiMail}
          placeholder="E-mail"
        />

        <Input 
          type="password" 
          icon={FiLock}
          placeholder="Senha"
        />

        <Button title="Entrar" disabled />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />  
    </Container>
  )
}