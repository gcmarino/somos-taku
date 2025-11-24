import Banner from "./components/Banner"
import { Experience } from "./components/Experience"
import { NavbarTaku } from "./components/Navbar"
import Team from "./components/Team"
import Techs from "./components/Techs"

function App() {

  return (
    <>
      <div className="sticky top-4 z-50">
        <NavbarTaku />
      </div>
      <div className="px-32">
        <Banner />
        <Team />
      </div>
      <Techs />
      <Experience />
      <div className="h-30">

      </div>
    </>
  )
}

export default App
