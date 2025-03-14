import "./App.css"
import Home from "./pages/Home"
import Ferramentas from "./pages/Ferramentas"
import Projetos from "./pages/Projetos"
import Contacto from "./pages/Contacto"
import Footer from "./pages/Footer"

function App() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="ferramentas">
        <Ferramentas />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Footer />
    </div>
  )
}

export default App
