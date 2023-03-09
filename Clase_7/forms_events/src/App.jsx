import { Container } from "../src/styles/StyledComponents"
import Login from "../src/components/Login"
import Register from "../src/components/Register"

function App() {

  return (
    <Container content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App
