import { Link } from "react-router-dom"
import { styles } from "../../../../styles/style"
import googlLogo from "../../../../../public/images/googolLogo.png";
import { FaStar } from "react-icons/fa";
import goodMan from "../../../../../public/images/GoodMan.png";
// import { useState, useEffect } from "react";

const GooglReviews = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews',
  //         {
  //           headers: {
  //             Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  //           },
  //         }
  //       );

  //       setReviews(response.data.reviews); // Adjust the response structure based on the actual API response
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <section className={`${styles.h_screen_center} font-inter`}>
        <div className="text-center">
            <img src={googlLogo}className="" alt="" />
            <div className={`${styles.flexCenter} mb-[2rem] gap-2`}>
                <p className="font-medium text-xl leading-6">Reviews </p>
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
            </div>
            <Link to="/" className=" font-medium text-xl leading-6 underline">
            View All Reviews
            </Link>
        </div>
        <div className="mt-10 px-4  flex items-center gap-4 overflow-hidden">
        <div className=" h-[403px] rounded-[10px] border-[1.5px]
           border-solid border-[#ff0000] bg-white p-4">
            <div className={`${styles.flexitems}  gap-5`}>
              <img src={goodMan} className="rounded-full h-[80px] self-start" alt="" />
              <div>
                <p className="font-medium text-xl leading-6 mb-4">
                  Sami B</p>
                  <div className={`${styles.flexCenter} mb-[2rem] gap-2`}>
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
            </div>
              </div>
            </div>
              <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Eget eu dui venenatis 
                pharetra euismod tincidunt a tincidunt. Est venenatis id ut quam 
                curabitur scelerisque sagittis sed viverra. Nullam sagittis adipiscing 
                duis semper ornare mollis iaculis. Ultricies in eget mi aliquet aliquet est.</p>
          </div>
          <div className=" h-[403px] rounded-[10px] border-[1.5px]
           border-solid border-[#ff0000] bg-white p-4">
            <div className={`${styles.flexitems}  gap-5`}>
              <img src={goodMan} className="rounded-full h-[80px] self-start" alt="" />
              <div>
                <p className="font-medium text-xl leading-6 mb-4">
                  Sami B</p>
                  <div className={`${styles.flexCenter} mb-[2rem] gap-2`}>
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
            </div>
              </div>
            </div>
              <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Eget eu dui venenatis 
                pharetra euismod tincidunt a tincidunt. Est venenatis id ut quam 
                curabitur scelerisque sagittis sed viverra. Nullam sagittis adipiscing 
                duis semper ornare mollis iaculis. Ultricies in eget mi aliquet aliquet est.</p>
          </div>
          <div className=" h-[403px] rounded-[10px] border-[1.5px]
           border-solid border-[#ff0000] bg-white p-4">
            <div className={`${styles.flexitems}  gap-5`}>
              <img src={goodMan} className="rounded-full h-[80px] self-start" alt="" />
              <div>
                <p className="font-medium text-xl leading-6 mb-4">
                  Sami B</p>
                  <div className={`${styles.flexCenter} mb-[2rem] gap-2`}>
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
                <FaStar className="text-2xl text-[#f29d38]" />
            </div>
              </div>
            </div>
              <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Eget eu dui venenatis 
                pharetra euismod tincidunt a tincidunt. Est venenatis id ut quam 
                curabitur scelerisque sagittis sed viverra. Nullam sagittis adipiscing 
                duis semper ornare mollis iaculis. Ultricies in eget mi aliquet aliquet est.</p>
          </div>
        </div>
    </section>
  )
}

export default GooglReviews