import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"

import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.warn("Preencha todos os campos!")
    }

    api.post("/users", { 
      name, 
      email, 
      password 
    })
    .then(() => {
      toast.success("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      console.log()
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível cadastrar.")
      }
    })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          type="text" 
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email" 
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/"> <FiArrowLeft size={16} /> Voltar para o login</Link>
      </Form>

      <Background />
      <ToastContainer />
    </Container>
  )
}