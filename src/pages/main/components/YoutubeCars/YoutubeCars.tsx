import ReactPlayer from "react-player";

const YoutubeCars = () => {
  return (
    <section className="grid place-items-center text-center min-h-screen">
        <div className="w-full">
            <h1 className="mb-8 font-FellGreat font-normal text-2xl md:text-4xl lg:text-5xl leading-2xl md:leading-3xl lg:leading-4xl
             leading-[78px]">Our Cars , Your Pride</h1>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 min-h-[864px]">
                <div className="h-full">
                <ReactPlayer width='100%'
          height='100%' url='https://www.youtube.com/watch?v=aMgkf_xslQE' />
                </div>
                <div className="h-full">
                <ReactPlayer width='100%'
          height='100%' url='https://www.youtube.com/watch?v=f-8OjN3G40o' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default YoutubeCars