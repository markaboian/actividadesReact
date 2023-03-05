import FunctionCounter from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent'
import { Container } from "../src/styles/StyledComponents"


function App() {
  
  return (
    <Container >
      <ClassComponent/>
      <FunctionCounter/>
    </Container>
  )
}

export default App
