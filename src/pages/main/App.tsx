import { useState, useEffect, Suspense } from "react";
import { fetchFirstSectionData } from "../../api/SectionOneApi";
import Arrivals from "./components/arrivals/Arrivals"
import Benfites from "./components/benfites/Benfites"
import Navbar from "./components/navbar/Navbar"
import { Section } from "./models";
import navLogo from "../../../public/images/siteLogo.png"
import YoutubeCars from "./components/YoutubeCars/YoutubeCars";
import GooglReviews from "./components/googlReviews/GooglReviews";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  const [sectionData, setSectionData] = useState<Section | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const totalSlides:string[] = [
    'http://192.168.100.3:8000/storage/images/L6YBtf1wkVTsHPXkHTPSHUGmFb3OawVGT1EMWwWj.png',
    'https://i.ibb.co/rtfPSvx/Rectangle-1.png',
    'http://192.168.100.3:8000/storage/images/L6YBtf1wkVTsHPXkHTPSHUGmFb3OawVGT1EMWwWj.png'
  ]
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides.length);
  };
  useEffect(() => {
    // Auto change slide every 5000 milliseconds (5 seconds)
    const autoChangeInterval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      // Cleanup interval on component unmount
      clearInterval(autoChangeInterval);
    };
  }, [currentSlide]);
  
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

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!sectionData) {
      return <div>No data available</div>;
  }

  return (
    <Suspense  key={sectionData.id} fallback={<h1>loding....</h1>}>
    <section className={`min-h-screen relative transition-all bg-cover leading-normal text-white w-full
     bg-no-repeat `}>
        <img 
        src={totalSlides[currentSlide]}
         className="absolute top-0 left-0 transition-opacity duration-500  z-[-1] w-full h-full
          object-cover" alt="" />
    <Navbar 
    logo={navLogo} />
    <h1
    style={{textShadow:"0px , 0px , 33.5px , #000000"}}
    className="text-[clamp(2.5rem,5vw,5rem)] pl-8 text-center md:text-start font-black
     leading-[clamp(50px ,4vw ,90px )]">
      {sectionData.title}</h1>
    </section>
    <Benfites />
    <Arrivals />
    <GooglReviews />
    <YoutubeCars />
    <Blogs />
    </Suspense>
  )
}

export default App