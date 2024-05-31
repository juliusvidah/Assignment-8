import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/blog/Blog'
import BlogDetails from './components/blogdetails/BlogDetails'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Error from './components/error/Error'
import Hooks from './components/hooks/Hooks'
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/*' element={<Error />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
