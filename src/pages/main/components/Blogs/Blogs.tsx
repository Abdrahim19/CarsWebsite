import { styles } from "../../../../styles/style"

const Blogs = () => {
  return (
    <section className={`${styles.h_screen_center} ${styles.BlackSection}`}>
      <div className="container font-FellGreat">
        <h3 className="font-normal text-5xl leading-[59px] mb-[2rem]">Blogs (Blog posts below)</h3>
        <div className={`mt-10 ${styles.threeCoslGrid} gap-[50px] `}>
          <div>
            <p className="font-normal text-lg xl:text-xl mb-5">Lorem ipsum dolor sit amet consectetur. Id mauris eget mattis auctor.
               Risus massa pulvinar amet lectus adipiscing augue morbi. Auctor adipiscing
                purus netus nisl mus at. Viverra morbi tortor consequat sagittis praesent.</p>
             <span className="font-normal text-2xl leading-[29px] ml-[3rem] relative 
             after:absolute after:w-8 after:h-[2px] after:top-1/2 after:left-[-3rem]
              after:bg-white">Source</span>   
          </div>
          <div>
            <p className="font-normal text-lg xl:text-xl mb-5">Lorem ipsum dolor sit amet consectetur. Id mauris eget mattis auctor.
               Risus massa pulvinar amet lectus adipiscing augue morbi. Auctor adipiscing
                purus netus nisl mus at. Viverra morbi tortor consequat sagittis praesent.</p>
             <span className="font-normal text-2xl leading-[29px] ml-[3rem] relative 
             after:absolute after:w-8 after:h-[2px] after:top-1/2 after:left-[-3rem]
              after:bg-white">Source</span>   
          </div>
          <div>
            <p className="font-normal text-lg xl:text-xl mb-5">Lorem ipsum dolor sit amet consectetur. Id mauris eget mattis auctor.
               Risus massa pulvinar amet lectus adipiscing augue morbi. Auctor adipiscing
                purus netus nisl mus at. Viverra morbi tortor consequat sagittis praesent.</p>
             <span className="font-normal text-2xl leading-[29px] ml-[3rem] relative 
             after:absolute after:w-8 after:h-[2px] after:top-1/2 after:left-[-3rem]
              after:bg-white">Source</span>   
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs