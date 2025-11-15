import Banner from "./components/Banner"
import { NavbarTaku } from "./components/Navbar"
import Team from "./components/Team"

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
    </>
  )
}

export default App
