import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/footer'
function App() {


  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
