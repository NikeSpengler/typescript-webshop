import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"

function App() {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Store/>}/>
        <Route path="/" element={<About/>}/>
      </Routes>
    </Container>
  )
}

export default App
