import { styles } from "../../../../styles/style"
import carImage from "../../../../../public/images/carImage.png";

const InstagramPostes = () => {
  return (
    <section className={`${styles.h_screen_center} ${styles.BlackSection} overflow-hidden font-inkFree
     relative`}>
      <div className={`${styles.flexitems} gap-3 absolute z-0 ${styles.center__y} top-[55%] 
      text-nowrap`}>
      <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
        <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">
        Instagram  -</h3>
      </div>
    <h3 className="mb-5 text-[40px] font-normal leading-[48px] tracking-normal">Instagram</h3>
    <div className="w-[70%] flex relative z-10 flex-wrap gap-4 items-center justify-center md:justify-between">
      <div className=" w-[193px] h-[245px]">
        <img src={carImage} className="w-full h-full object-cover rounded-[20px]" alt="" />
      </div>
      <div className=" w-[193px] h-[245px]">
        <img src={carImage} className="w-full h-full object-cover rounded-[20px]" alt="" />
      </div>
      <div className=" w-[193px] h-[245px]">
        <img src={carImage} className="w-full h-full object-cover rounded-[20px]" alt="" />
      </div>
    </div>
  </section>
  )
}

export default InstagramPostes