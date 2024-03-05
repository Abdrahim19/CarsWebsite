import { styles } from "../../../../styles/style"
import BusinessInfo from "./BusinessInfo"

const Esablished = () => {
  return (
    <section className={`${styles.h_screen_center} font-Inria bg-[#D9D9D98F] text-black`}>
        <div className="container">
        <h2 className="font-bold font-Italiana text-2xl md:text-4xl  leading-[57px] my-[30px] text-center">Esablished Name in the Car Local 
        and Export Sales</h2>
        <p className="mb-[20px] font-bold text-[27px] leading-8">Our vision</p>
        <p className="font-bold text-lg leading-6 ml-[50px]">- to protect and grow our reputation as a 
            trusted cehicule provider worldwide and to lead as car exporter in Dubai</p>
            <p className="my-[20px] font-bold text-[27px] leading-8">Our vision</p>
        <p className="font-bold text-lg leading-6 ml-[50px]">- to protect and grow our reputation as a 
            trusted cehicule provider worldwide and to lead as car exporter in Dubai</p>
            <p className="my-[20px] font-bold text-[27px] leading-8">Our vision</p>
        <p className="font-bold text-lg leading-6 ml-[50px]">- to protect and grow our reputation as a 
            trusted cehicule provider worldwide and to lead as car exporter in Dubai</p>
            <div className={`flex items-start  mt-8 gap-4 md:justify-between justify-center flex-wrap`}>
                <BusinessInfo years={20} discrption={"Years in business"} />
                <BusinessInfo years={50} discrption={"Cars sold"} />
                <BusinessInfo years={150} discrption={"Inventory"} />
            </div>
        </div>
    </section>
  )
}

export default Esablished