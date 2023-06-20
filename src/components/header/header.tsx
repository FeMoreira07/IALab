import { ButtonsList, Container, Title } from "./styles";
import { FaBrain } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <Title>
        <FaBrain />
        <h1>AI.Lab</h1>
      </Title>
      <ButtonsList>
        <li>About</li>
        <li>How It Works</li>
        <li>GitHub</li>
      </ButtonsList>
    </Container>
  );
}
