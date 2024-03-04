import { Link } from "react-router-dom";

interface ExclusiveDiscoveryProps {
  title: string;
  description: string;
}

const BenfitesBox: React.FC<ExclusiveDiscoveryProps> = ({ title, description }) => {
  return (
    <div className="text-center md:text-start">
      <h2 className="font-medium 
       lg:leading-[40px] xl:leading-[50px]" style={{fontSize:'clamp(20px ,4vw , 40px)'}}>
        {title}
      </h2>
      <p className="mt-4 font-Inria mb-[25px] text-lg md:text-xl leading-[88px]">
        {description}
      </p>
      <Link to={"/"} className="font-Inria text-lg md:text-xl leading-[24px] font-normal">
        See more
      </Link>
    </div>
  );
};

export default BenfitesBox;
