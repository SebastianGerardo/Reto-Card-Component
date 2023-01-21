import Perfil from './Components/Perfil'
import Footer from './Components/Footer'
import Name from './Components/Name'
import BgPattern from './Components/BgPattern'
import './reto.css'

function Home() {
  return (
    <section className='card'>
      <div>
        <Perfil />
        <Name />
        <Footer />
      </div>
      </section>
  )
}

export default Home
