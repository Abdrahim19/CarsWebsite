import { Link } from "react-router-dom"
import { styles } from "../../../../styles/style"
import googlLogo from "../../../../../public/images/googolLogo.png";
import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";
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
        <div className="mt-10 px-4 slider-container flex items-center justify-center
        gap-4 overflow-x-scroll snap-x snap-mandatory w-full" 
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 10px 0)",
        }}>
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
          <ReviewCard userId={""} userName={""} userImge={""} userSays={""} />
        </div>
    </section>
  )
}

export default GooglReviews