import { Link, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { FiPlus } from "react-icons/fi"
import { Container, Content, Section } from "./styles"
import { Note } from "../../components/Note"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hook/useAuth"

export function Home() {
  const { search } = useAuth()
  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")

      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate(`preview/${id}`)
  }

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <FiPlus />
            Adicionar filme
          </Link>
        </div>

        <section className="note-itens">

          {
            notes.map(note => (
              <Section onClick={() => handleNavigate(note.id)} key={note.id}>
                <Note data={{
                  title: note.title,
                  rating: note.rating,
                  description: note.description,               
                  tags: note.tags.map(tag => (
                      { id: tag.id, name: tag.name }
                  ))
                }}
                />
              </Section>
            ))
          }
        </section>


      </Content>
    </Container>
  )
}
