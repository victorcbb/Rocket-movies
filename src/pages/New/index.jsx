import { Container, Content, Form } from "./styles";
import { Header } from "../../components/Header"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton to="/" />

        <h1>Novo Filme</h1>

        <Form>
          <div>
            <Input 
              type="text" 
              placeholder="Título"
            />
            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" 
              max="5"
            />
          </div>
          <textarea cols="30" rows="10" placeholder="Observações"></textarea>

          <h3>Marcadores</h3>

          <div className="tags">
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>

          <div className="buttons">
            <Button title="Excluir Filme" isBlack />
            <Button title="Salvar alterações" />
          </div>

        </Form>
      </Content>
    </Container>
  )
}