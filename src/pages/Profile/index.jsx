import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Avatar, Container, Form } from "./styles";
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  return (
    <Container>
      <header>
        <BackButton />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/victorcbb.png" alt="Foto perfil do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id='avatar'
              type="file"
            />
          </label>
        </Avatar>

        <Input 
          defaultValue="Victor Barros"
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />

        <Input 
          defaultValue="victor@email.com"
          type="e-mail"
          placeholder="E-mail"
          icon={FiMail}
        />

        <Input 
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
        />

        <Input 
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button disabled title="Salvar" />
      </Form>
    </Container>
  )
}