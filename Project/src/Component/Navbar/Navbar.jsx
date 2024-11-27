import './Navbar.css'
import logo from '../../assets/logo (2).png'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 630 ? setSticky(true) : setSticky(false);
    })
  }, []);
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>The Institute</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Academics</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Infrastruture</Link></li>
        <li><Link to='placement' smooth={true} offset={-260} duration={500}>Training & Placement</Link></li>
      </ul>
      <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
    </nav>
  )
}

export default Navbar
