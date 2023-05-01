import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Section>this is my first styled component div</Section>
      <Button $primary>Click me </Button>
      <Button>Click me </Button>
      <NewButton as='a' href='#'>
        Click to Visit
      </NewButton>

      <Input placeholder='this is input field' InputColor='red' />
      <NewInput InputColor='red' />
    </Main>
  );
}

export default App;

const Section = styled.div`
  margin: auto;
`;

const Main = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: 2px solid dark;

  border-radius: 3px;
  font-size: 1rem;
  background-color: ${(props) => (props.$primary ? "black" : "white")};
  color: ${(props) => (props.$primary ? "white" : "dark")};
  margin: 1rem;
  cursor: pointer;
`;

const NewButton = styled(Button)`
  border: 2px solid palevioletred;
  text-decoration: none;
  color: palevioletred;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: "2rem",
}))`
  border: 2px solid aqua;
  color: ${(props) => props.InputColor};
  padding: 0.5rem;
`;

const NewInput = styled(Input).attrs((props) => ({
  type: "password",
}))`
  border: 2px solid blue;
`;
