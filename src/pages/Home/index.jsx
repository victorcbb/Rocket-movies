import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { FiPlus } from "react-icons/fi"
import { Container, Content, Section } from "./styles"
import { Note } from "../../components/Note"

export function Home() {

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

        <Section to="/preview/1">
          <Note data={{
            title:"Interstellar", 
            rating: "4", 
            description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
            tags: [
              {id: "1", name: "Ficção científica"},
              {id: "2", name: "Drama"},
              {id: "3", name: "Família"}
            ]
          }}
          />
        </Section>

        <Section to="/preview/1">
          <Note data={{
            title:"Interstellar", 
            rating: "4", 
            description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
            tags: [
              {id: "1", name: "Ficção científica"},
              {id: "2", name: "Drama"},
              {id: "3", name: "Família"}
            ]
          }}
          />
        </Section>

        <Section to="/preview/1">
          <Note data={{
            title:"Interstellar", 
            rating: "4", 
            description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
            tags: [
              {id: "1", name: "Ficção científica"},
              {id: "2", name: "Drama"},
              {id: "3", name: "Família"}
            ]
          }}
          />
        </Section>

        <Section to="/preview/1">
          <Note data={{
            title:"Interstellar", 
            rating: "4", 
            description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
            tags: [
              {id: "1", name: "Ficção científica"},
              {id: "2", name: "Drama"},
              {id: "3", name: "Família"}
            ]
          }}
          />
        </Section>

        <Section to="/preview/1">
          <Note data={{
            title:"Interstellar", 
            rating: "4", 
            description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
            tags: [
              {id: "1", name: "Ficção científica"},
              {id: "2", name: "Drama"},
              {id: "3", name: "Família"}
            ]
          }}
          />
        </Section>
        </section>

        
      </Content>
    </Container>
  )
}
