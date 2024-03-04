import React, {Suspense } from "react";
import { navlinks } from "../../data";
import { styles } from "../../../../styles/style";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import siteLogo from "../../../../../public/images/site__logo.png";

type props = {
  logo:string
}
const Navbar:React.FC<props> = ({logo}) => {
  return (
    <Suspense fallback={<h1>Loding ....</h1>}>
    <nav
      className={`lg:px-8 px-4 ${styles.flexitems} h-[15vh] pt-8 justify-between 
      first-line:bg-transparent`}
    >
        <button className="md:hidden">
        <FiMenu className="text-[3rem] text-black"/>
        </button>
        <ul className="hidden md:flex gap-4 py-[0.38rem] mr-6">
          {navlinks.map((nav) => (
        <NavLink key={nav.id} 
        style={{textShadow:"0px 0px 10.9px #000"}}
                to={nav.path} className={`font-bold text-[clamp(.5rem,4vw , 1rem)] leading-[19px]`} >
                {nav.title}
        </NavLink>
          ))}
        </ul>
          <Link to={'/'} className="mt-[1rem]">
            <img src={logo || siteLogo} className="h-[18rem] " alt="" />
          </Link>
          <div className="p-12"></div>
    </nav>
    </Suspense>
  );
};

export default Navbar;

