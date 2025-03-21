import IntroOneImg from "@/assets/intro1img.jpg"

const IntroOne = () => {
  return (
    <div className="lm:py-32 py-20">
      <div>
        <img src={IntroOneImg} alt="Banner Image" className="w-full"/>
      </div>
      <div className="sm:px-32 xs:px-20 px-14 xs:pt-32 pt-24 grid grid-rows-2 gap-8">
        <p>
          Kurb pursued his formal education at Reading College of Art and Technology, where he achieved distinctions despite facing considerable challenges, including severe bullying. His experiences during this period fuelled his resilience and determination as an artist. 
        </p>
        <p>
          Rejecting the conventional academic approach to art, he sought to create rather than merely discuss it. This independent mindset has defined his career ever since.
        </p>
      </div>
    </div>
  )
}

export default IntroOne