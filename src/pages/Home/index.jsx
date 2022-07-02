import { Header } from "../../components/Header"
import { FiPlus } from "react-icons/fi"
import { Container, Content } from "./styles"
import { Note } from "../../components/Note"

export function Home() {

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <a href="/new">
            <FiPlus />
            Adicionar filme
          </a>
        </div>

        <section className="notes">
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
        </section>
        
      </Content>
    </Container>
  )
}
