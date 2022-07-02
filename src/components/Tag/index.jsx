import { Container } from "./styles";

export function Tag({ title, ...rest }) {
  return (
    <Container>
      {title}
    </Container>
  )
}