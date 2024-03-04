import heroImage from "../../../../../public/images/hero__img.png";

const YoutubeCars = () => {
  return (
    <section className="grid place-items-center text-center min-h-screen">
        <div className="">
            <h1 className="mb-4 font-FellGreat font-normal text-2xl md:text-4xl lg:text-5xl leading-2xl md:leading-3xl lg:leading-4xl
             leading-[78px]">Our Cars , Your Pride</h1>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={heroImage} className="w-100 h-100 object-cover" alt="" />
                </div>
                <div>
                    <img src={heroImage} className="w-100 h-100 object-cover" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default YoutubeCars