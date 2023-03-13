import React, { Fragment, useState } from 'react'
import Card from './components/Card'
import User from './components/User'
import { Container } from './styles/StyledComponents'
// import './App.css'

function App() {

  const [view, setView] = useState(null)
  const [values, setValues] = useState(null);

  const handleValues = (songInformation) => {
    setValues(songInformation);
    setView("user")
  }

  return (
    <Fragment>
      <Container container="row">
        <Card handleValues={handleValues} />
      </Container>
      <Container container="component">
        {
          view === "user" && <User {...values} />
        }
      </Container>

    </Fragment>
  )
}

export default App
