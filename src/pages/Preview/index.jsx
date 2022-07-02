import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { StarRating } from "../../components/StarRating";
import { Tag } from "../../components/Tag";

export function Preview() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton />

        <div className="title">
          <h1>Interstellar</h1>
          <StarRating rating="4" />
        </div>

        <div className="infos">
          <img src="https://github.com/victorcbb.png" alt="Foto do perfil do usuário" />
          <span>Por Victor Barros</span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 1.73077C4.94261 1.73077 2.06767 4.76146 2.06767 8.5C2.06767 12.2385 4.94261 15.2692 8.48904 15.2692C12.0355 15.2692 14.9104 12.2385 14.9104 8.5C14.9104 4.76146 12.0355 1.73077 8.48904 1.73077ZM0.900146 8.5C0.900146 4.08172 4.29781 0.5 8.48904 0.5C12.6803 0.5 16.0779 4.08172 16.0779 8.5C16.0779 12.9183 12.6803 16.5 8.48904 16.5C4.29781 16.5 0.900146 12.9183 0.900146 8.5Z" fill="#FF859B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 3.57692C8.81144 3.57692 9.0728 3.85244 9.0728 4.19231V7.88462H12.5754C12.8978 7.88462 13.1591 8.16013 13.1591 8.5C13.1591 8.83987 12.8978 9.11539 12.5754 9.11539H8.48904C8.16663 9.11539 7.90527 8.83987 7.90527 8.5V4.19231C7.90527 3.85244 8.16663 3.57692 8.48904 3.57692Z" fill="#FF859B"/>
          </svg>
          <span>02/07/2022 às 10:00</span>
        </div>

        <div className="tags">
          <Tag isPreview title="Ficção Científica" />
          <Tag isPreview title="Drama" />
          <Tag isPreview title="Família" />
        </div>

        <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
          <br/><br/>
          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.

        </p>

      </Content>
    </Container>
  )
}