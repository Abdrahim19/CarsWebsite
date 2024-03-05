import { NavLink } from "react-router-dom"
import { navlinks } from "../../data"
import { styles } from "../../../../styles/style"
import navLogo from "../../../../../public/images/siteLogo.png"
import { GrClose } from "react-icons/gr";
import { FC } from "react";

type props = {
    isOpen:boolean;
    close:() => void
}
const MobilMenu:FC<props> = ({isOpen , close}) => {
  return (
    <>
    <div onClick={close} className={`${isOpen ? "opacity-60 visible" : " hidden opacity-0"} 
    fixed  top-0 left-0 bg-black z-[15] size-full`}>
    </div>
    <div className={`fixed top-0 left-0 z-50 bg-white shadow-lg h-screen p-6 w-[20rem] transition-[left] delay-75
    ${isOpen ? "left-0" : " left-[-20rem]"}`}>
        <div className={`${styles.flexBetween}`}>
            <img src={navLogo} alt="" />
            <button onClick={close} className="absolute top-4 right-4 text-2xl">
            <GrClose className="text-black" />
            </button>
        </div>
        <ul className="grid gap-3 text-center py-[0.38rem] mr-6">
          {navlinks.map((nav) => (
        <NavLink key={nav.id} 
        style={{textShadow:"0px 0px 10.9px #000"}}
                to={nav.path} className={`font-bold text-[clamp(.5rem,4vw , 1rem)] leading-[19px]`} >
                {nav.title}
        </NavLink>
          ))}
        </ul>
    </div>
    </>
  )
}

export default MobilMenu