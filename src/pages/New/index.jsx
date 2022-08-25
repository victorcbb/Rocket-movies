import { useState } from "react"

import { BackButton } from "../../components/BackButton"
import { NoteItem } from "../../components/NoteItem"
import { Container, Content, Form } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      return toast.error("Preencha o título do filme.")
    }

    if (!rating) {
      return toast.error("Defina de 0 a 5 o quando você achou legal o filme.")
    }

    if (!description) {
      return toast.error("Escreva nas observações o que você achou do filme.")
    }

    if (newTag) {
      return toast.warn("Existe uma tag no campo para adicionar!")
    }
    
    if (tags.length === 0) {
      return toast.error("Adicione pelo menos um marcador")
    }


    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    toast.success("Nota criada com sucesso!")
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [
      ...prevState,
      newTag
    ])

    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />
      <Content>
        <BackButton onClick={handleBack} />

        <h1>Novo Filme</h1>

        <Form>
          <div>
            <Input 
              type="text" 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" 
              max="5"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <textarea 
            cols="30" 
            rows="10" 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          ></textarea>

          <h3>Marcadores</h3>

          <div className="tags">
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder="Novo marcador" 
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className="buttons">
            <Button title="Excluir Filme" onClick={handleBack} isBlack />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>

        </Form>
      </Content>
    </Container>
  )
}