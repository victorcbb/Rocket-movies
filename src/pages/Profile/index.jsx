import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { BackButton } from "../../components/BackButton"
import { Avatar, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useAuth } from "../../hook/useAuth"
import { api } from "../../services/api"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar ?
    `${api.defaults.baseURL}/files/${user.avatar}` :
    avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({ user, avatarFile })
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }


  return (
    <Container>
      <header>
        <BackButton onClick={handleBack} />
      </header>

      <Form>
        <Avatar>

          <img src={avatar} alt="Foto perfil do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id='avatar'
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          defaultValue={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />

        <Input
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
          type="e-mail"
          placeholder="E-mail"
          icon={FiMail}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}