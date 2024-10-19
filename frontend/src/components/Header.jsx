import {useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="bg-gray-800 text-white p-4" id="header">
      <nav className={`bg-white fixed w-full z-20 top-0 start-0 ${scrolled ? 'shadow-lg' : 'border-b'}`} id="nav" > 
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Legacy Landmarks Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap " id="logo-title">Legacy Landmarks</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
          className="text-black   hover:bg-white focus:ring-800  focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          // onClick={suggestRandomPlace}
        >
          Explore Places
          <FontAwesomeIcon icon={faMapLocationDot} className='ml-2'/>
          </button>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
