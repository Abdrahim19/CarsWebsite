import { FaStar } from "react-icons/fa"
import { styles } from "../../styles/style"

const Stars = () => {
  return (
    <div className={`${styles.flexCenter} flex-wrap mb-[2rem] gap-2`}>
    <FaStar className="text-2xl text-[#f29d38]" />
    <FaStar className="text-2xl text-[#f29d38]" />
    <FaStar className="text-2xl text-[#f29d38]" />
    <FaStar className="text-2xl text-[#f29d38]" />
    <FaStar className="text-2xl text-[#f29d38]" />
</div>
  )
}

export default Stars