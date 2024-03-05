import { FC } from "react"
import Stars from "../../../../components/commen/Stars"
import { styles } from "../../../../styles/style"
import goodMan from "../../../../../public/images/GoodMan.png";


type cardType = {
userId:string,
userName:string,
userImge:string,
userSays:string
}
const ReviewCard:FC<cardType> = ({userImge , userId , userName , userSays}) => {
  return (
    <div key={userId} className="snap-start flex-shrink-0 min-h-[203px] w-[500px] lg:w-[500px]
    rounded-[10px] border-[1.5px]
    border-solid border-[#ff0000] bg-white p-4">
     <div className={`${styles.flexitems} gap-5`}>
       <img src={userImge || goodMan} className="rounded-full h-[80px] self-start" alt="" />
       <div>
         <p className="font-medium text-xl leading-6 mb-4">
            { userName || "Sami B"}
           </p>
           <Stars />
       </div>
     </div>
       <p className="font-normal text-xl">
        {userSays ||
         "Lorem ipsum dolor sit amet consectetur. Eget eu dui venenatis pharetra euismod tincidunt a tincidunt. Est venenatis id ut quam curabitur scelerisque sagittis sed viverra. Nullam sagittis adipiscing "}
        
         </p>
   </div>
  )
}

export default ReviewCard