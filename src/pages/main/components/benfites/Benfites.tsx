import { useState, useEffect } from "react";
import { fetchSecondSectionData } from "../../../../api/SectionOneApi";
import { BenfitesType } from "../../models";
import BenfitesBox from "./BenfitesBox"

const Benfites = () => {
    const [sectionData, setSectionData] = useState<BenfitesType | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchSecondSectionData();
        setSectionData(data);
      };
  
      fetchData();
    }, []);

    console.log(sectionData);
    
  return (
    <section className="min-h-screen font-Italiana grid place-items-center py-8 bg-[#D9D9D98F]">
        <div key={sectionData?.id} className="container">
        <h1 className="font-normal text-center md:text-start text-xl lg:text-2xl xl:text-5xl 
        leading-[clamp(30px , 4vw,70px )] mb-[40px]">
        {sectionData?.main_title || "Welcome to Barugazi Motors"}</h1>
            <div className="justify-center grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3" style={{gap:"clamp(30px ,4vw , 50px)"}}>
                {sectionData?.details.map((detail) => (
                    <BenfitesBox
                    key={detail.id}
           title={detail.title || "Exclusive Car Discovery"}
           description= {detail.body || "Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit dolor adipiscing egestas" }
           
         />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Benfites