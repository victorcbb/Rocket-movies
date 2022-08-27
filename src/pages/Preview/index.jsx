import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'

import { BackButton } from "../../components/BackButton"
import { StarRating } from "../../components/StarRating"
import { Header } from "../../components/Header"
import { Container, Content } from "./styles"
import { useAuth } from "../../hook/useAuth"
import { Tag } from "../../components/Tag"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useEffect } from "react"
import { Button } from "../../components/Button"
import { toast } from "react-toastify"

export function Preview() {
  const { user } = useAuth()
  const [note, setNote] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  async function handleDeleteNote() {
    const confirm = window.confirm('Tem certeza que deseja excluir a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
      toast.success("Nota deletada com sucesso.")
    }
  }

  function handleNavigate() {
    navigate(-1)
  }

  const avatarUrl = user.avatar ?
    `${api.defaults.baseURL}/files/${user.avatar}` :
    avatarPlaceholder

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)

      setNote(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <BackButton onClick={handleNavigate} />

        <div className="title">
          <h1>{note.title}</h1>
          <StarRating rating={note.rating} />
        </div>

        <div className="infos">
          <img src={avatarUrl} alt="Foto do perfil do usuário" />
          <span>Por {user.name}</span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.48904 1.73077C4.94261 1.73077 2.06767 4.76146 2.06767 8.5C2.06767 12.2385 4.94261 15.2692 8.48904 15.2692C12.0355 15.2692 14.9104 12.2385 14.9104 8.5C14.9104 4.76146 12.0355 1.73077 8.48904 1.73077ZM0.900146 8.5C0.900146 4.08172 4.29781 0.5 8.48904 0.5C12.6803 0.5 16.0779 4.08172 16.0779 8.5C16.0779 12.9183 12.6803 16.5 8.48904 16.5C4.29781 16.5 0.900146 12.9183 0.900146 8.5Z" fill="#FF859B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.48904 3.57692C8.81144 3.57692 9.0728 3.85244 9.0728 4.19231V7.88462H12.5754C12.8978 7.88462 13.1591 8.16013 13.1591 8.5C13.1591 8.83987 12.8978 9.11539 12.5754 9.11539H8.48904C8.16663 9.11539 7.90527 8.83987 7.90527 8.5V4.19231C7.90527 3.85244 8.16663 3.57692 8.48904 3.57692Z" fill="#FF859B" />
          </svg>
          {
            note.created_at &&
            <span>{formatInTimeZone(new Date(note.created_at), "America/Chihuahua", "dd/MM/yyyy ' às ' HH:mm")}</span>
          }
        </div>

        {note.tags &&
          <div className="tags">
            {
              note.tags.map(tag => (
                <Tag key={String(tag.id)} isPreview title={tag.name} />
              ))
            }
          </div>
        }

        <p>
          {note.description}
        </p>

        <div className="DeleteNote">
          <Button title="Excluir Filme" onClick={handleDeleteNote} isBlack />
        </div>

      </Content>
    </Container>
  )
}