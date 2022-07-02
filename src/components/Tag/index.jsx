import { Container } from "./styles";

export function Tag({ title, isPreview, ...rest }) {
  return (
    <Container isPreview={isPreview}>
      {title}
    </Container>
  )
}