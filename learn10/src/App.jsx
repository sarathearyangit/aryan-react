import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import No from './pages/No'
import Personal from './pages/Personal'
import Office from './pages/Office'
import Courses from './pages/Courses'
import { Route,Routes } from 'react-router-dom'
import Courdetail from './pages/Courdetail'
import Navbar1 from './components/Navbar1'



const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar />
      <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}>
            <Route path='office' element={<Office />}/>
            <Route path='personal' element={<Personal />}/>
          </Route>

          <Route path='courses' element={<Courses />} />
          <Route path='courses/:ad' element={<Courdetail />} />

          <Route path='/about' element={<About />}/>
          <Route path='*' element={<No />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App