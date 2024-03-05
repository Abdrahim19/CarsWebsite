import { styles } from "../../../../styles/style"
import { CiCalendar } from "react-icons/ci";
import carImage from "../../../../../public/images/carImage.png";
import { FaGasPump } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";

const Arrivals = () => {
  return (
    <section className={`font-inter ${styles.h_screen_center} ${styles.BlackSection}`}>
        <h1 className="text-3xl mt-[50px] font-Italiana md:text-4xl lg:text-5xl xl:text-6xl 
        leading-[clamp(30px ,4vw , 71px)]">New Arrivals</h1>
        <div className={`${styles.threeCoslGrid} container my-[50px] my-[clamp(25px ,4vw ,50px)] gap-2`}>
            <div>
                <img src={carImage} className="w-full h-[250px] object-cover" alt="" />
                <div className="p-4 bg-white text-black">
                    <h3 className="font-bold text-lg leading-[22px] mb-3">
                    Mercedes Amg get 2024
                    </h3>
                    <ul className={`${styles.flexitems} justify-between 
                    gap-2 px-[clamp(15px ,4vw , 36px)] flex-wrap`}>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <CiCalendar  style={{fontSize: '1rem' }} />
                            2021
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <TbAutomaticGearbox  style={{fontSize: '1rem' }} />
                        Automatic
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <FaGasPump  style={{fontSize: '1rem' }} />
                        Gasoline
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <IoSpeedometerOutline  style={{fontSize: '1rem' }} />
                         10
                        </li>
                    </ul>
                    <hr className="border border-solid border-[#d9d9d9] mb-[8px] mt-[13px]" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-black text-white ">I’m Interested</button>
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-[#d9d9d9] text-black">View</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={carImage} className="w-full h-[250px] object-cover" alt="" />
                <div className="p-4 bg-white text-black">
                    <h3 className="font-bold text-lg leading-[22px] mb-3">
                    Mercedes Amg get 2024
                    </h3>
                    <ul className={`${styles.flexitems} justify-between 
                    gap-2 px-[clamp(15px ,4vw , 36px)] flex-wrap`}>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <CiCalendar  style={{fontSize: '1rem' }} />
                            2021
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <TbAutomaticGearbox  style={{fontSize: '1rem' }} />
                        Automatic
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <FaGasPump  style={{fontSize: '1rem' }} />
                        Gasoline
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <IoSpeedometerOutline  style={{fontSize: '1rem' }} />
                         10
                        </li>
                    </ul>
                    <hr className="border border-solid border-[#d9d9d9] mb-[8px] mt-[13px]" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-black text-white ">I’m Interested</button>
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-[#d9d9d9] text-black">View</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={carImage} className="w-full h-[250px] object-cover" alt="" />
                <div className="p-4 bg-white text-black">
                    <h3 className="font-bold text-lg leading-[22px] mb-3">
                    Mercedes Amg get 2024
                    </h3>
                    <ul className={`${styles.flexitems} justify-between 
                    gap-2 px-[clamp(15px ,4vw , 36px)] flex-wrap`}>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <CiCalendar  style={{fontSize: '1rem' }} />
                            2021
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <TbAutomaticGearbox  style={{fontSize: '1rem' }} />
                        Automatic
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <FaGasPump  style={{fontSize: '1rem' }} />
                        Gasoline
                        </li>
                        <li className={'flex items-center  gap-1 font-medium text-[10px] leading-3 text-gray-light'}>
                        <IoSpeedometerOutline  style={{fontSize: '1rem' }} />
                         10
                        </li>
                    </ul>
                    <hr className="border border-solid border-[#d9d9d9] mb-[8px] mt-[13px]" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-black text-white ">I’m Interested</button>
                        <button className="h-[31px] text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-[#d9d9d9] text-black">View</button>
                    </div>
                </div>
            </div>
        </div>
        <button className={`w-[clamp(180px,4vw,238px)] h-[clamp(40px,4vw,80px)] rounded-[69px] ${styles.CenterGrid} bg-[#d9d9d9]
            font-light text-[clamp(15px ,4vw , 25px)] leading-[33px] text-white`}>View Stock</button>

    </section>
  )
}

export default Arrivals