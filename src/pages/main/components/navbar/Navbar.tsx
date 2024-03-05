import React, {Suspense, useEffect, useState } from "react";
import { navlinks } from "../../data";
import { styles } from "../../../../styles/style";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import siteLogo from "../../../../../public/images/site__logo.png";
import MobilMenu from "./MobilMenu";

type props = {
  logo:string
}
const Navbar:React.FC<props> = ({logo}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Bgwhite, setBgwhite] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if the user has scrolled past 100vh
      if (scrollY > window.innerHeight) {
        setBgwhite('bg-white fixed top-0 z-50 left-0 w-full !py-0 !px-3')
      } else {
        setBgwhite('')
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <Suspense fallback={<h1>Loding ....</h1>}>
    <nav
      className={`lg:px-8 text-white -pr-2 pl-4 ${styles.flexitems} ${Bgwhite} justify-between h-[15vh] pt-8 
      first-line:bg-transparent`}
    >
        <button onClick={toggleMobileMenu} className="md:hidden">
        <FiMenu className="text-[3rem] text-black"/>
        </button>
        <ul className="hidden md:flex gap-4 py-[0.38rem] mr-6">
          {navlinks.map((nav) => (
        <NavLink key={nav.id} 
        style={{textShadow:"0px 0px 10.9px #000"}}
                to={nav.path} className={`font-bold relative after:absolute hover:after:w-full after:w-0 after:duration-200
                 after:h-1 after:bottom-[-.5rem] after:left-0 after:bg-amber-300  
                 text-[13px]  leading-[19px]`} >
                {nav.title}
        </NavLink>
          ))}
        </ul>
          <Link to={'/'} className="mt-[1rem]">
            <img src={logo || siteLogo} className="max-h-[10rem] " alt="" />
          </Link>
  
    </nav>
    <MobilMenu isOpen={isMobileMenuOpen} close={toggleMobileMenu} />
    </Suspense>
  );
};

export default Navbar;

