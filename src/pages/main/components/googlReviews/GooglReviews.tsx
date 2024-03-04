import { Link } from "react-router-dom"
import { styles } from "../../../../styles/style"
import { CiStar } from "react-icons/ci"

const GooglReviews = () => {
  return (
    <section className={`${styles.h_screen_center} font-inter`}>
        <div>
            <img src="" className="" alt="" />
            <div className={`${styles.flexitems} gap-2`}>
                <p className="font-medium text-xl leading-6">Reviews </p>
                <CiStar className="text-2xl text-[<CiStar />]" />
            </div>
            <Link to="/" className="mt-5 font-medium text-xl leading-6 underline">
            View All Reviews
            </Link>
        </div>
    </section>
  )
}

export default GooglReviews