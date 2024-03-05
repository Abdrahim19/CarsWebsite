import { useState, useEffect, Suspense } from "react";
import { fetchFirstSectionData } from "../../api/SectionOneApi";
import Arrivals from "./components/arrivals/Arrivals"
import Benfites from "./components/benfites/Benfites"
import Navbar from "./components/navbar/Navbar"
import { Section } from "./models";
import YoutubeCars from "./components/YoutubeCars/YoutubeCars";
import GooglReviews from "./components/googlReviews/GooglReviews";
import Blogs from "./components/Blogs/Blogs";
import InstagramPostes from "./components/InstagramPostes/InstagramPostes";
import Esablished from "./components/Esablished/Esablished";
import Partenars from "./components/partenars/Partenars";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const App = () => {
  const [sectionData, setSectionData] = useState<Section | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(error);
  



  useEffect(() => {
      const fetchData = async () => {
          try {
              setLoading(true);
              const data = await fetchFirstSectionData(1);

              if (data) {
                  setSectionData(data);
                  setError(null);
              } else {
                  setError('Failed to fetch data.');
              }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error:any) {
              console.error(error);
              setError(`Failed to fetch data: ${error.message}`);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  

  return (
    <Suspense  key={sectionData?.id} fallback={<h1>loding....</h1>}>
         <Navbar 
    logo={`http://192.168.100.3:8000/storage/${sectionData?.logo}`} />
    <h1
    style={{textShadow:"0px , 0px , 33.5px , #000000"}}
    className="text-[clamp(2.5rem,5vw,5rem)] text-white text-center md:text-start 
    font-black absolute top-[130px] left-6 z-40
     leading-[clamp(50px ,4vw ,90px )]">
     {sectionData?.title}</h1>
        <Swiper modules={[Navigation, Pagination, Mousewheel, Keyboard]} navigation={true} pagination={true} 
        className="mySwiper relative">
          {sectionData?.images.map((slideImge) => (
        <SwiperSlide>
        <img 
        src={`http://192.168.100.3:8000/storage/${slideImge.image_path}`}
         className="w-full h-full
          object-cover" alt="" />
        </SwiperSlide>
          ))}
      </Swiper>
    <Benfites />
    <Arrivals />
    <GooglReviews />
    <InstagramPostes />
    <Esablished />
    <Partenars />
    <YoutubeCars />
    <Blogs />
    </Suspense>
  )
}

export default App