import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import Programs from './Component/Programs/Programs'
import Testimonial from './Component/Testimonial/Testimonial'
import Title from './Component/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title />
        <Programs />
        <About />
        <Campus />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
