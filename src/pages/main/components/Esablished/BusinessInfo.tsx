import React from 'react';

interface BusinessInfoProps {
  years: number;
  discrption:string;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ years , discrption }) => {
  return (
    <div className="text-center">
      <p className="font-bold text-[60px] font-Inria leading-[77px] mb-2 lg:mb-4">{years}</p>
      <h3 className="font-Inika font-bold md:text-xl text-lg max-w-[10ch] lg:text-2xl xl:text-3xl 2xl:text-4xl leading-[63px]">
        {discrption}
      </h3>
    </div>
  );
};

export default BusinessInfo;
