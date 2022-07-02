import { FiArrowLeft } from "react-icons/fi"  
import { Container } from "./styles"

export function BackButton({ ...rest }) {
  return (
    <Container {...rest}>
      <FiArrowLeft size={16}/>
      Voltar
    </Container>
  )
}