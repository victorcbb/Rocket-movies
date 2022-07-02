import { Container } from "./styles";


export function Button({title, loading = false, isBlack, ...rest }) {
  return (
    <Container 
      {...rest}
      type="button"
      disabled={loading}
      isBlack={isBlack}
    >
      {loading ? "Carregando" : title}
    </Container>
  )
}