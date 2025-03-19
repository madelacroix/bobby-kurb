import IntroTwoImg from "@/assets/photoshoot.jpg"

const IntroTwo = () => {
  return (
    <div className="md:py-52 md:pb-0 xs:pb-52 pb-40 sm:px-32 xs:px-20 px-14 md:flex justify-between">
      <div className="md:mr-10">
        <img src={IntroTwoImg} alt="Image of photoshoot" className="md:m-0 m-auto max-md:w-full"/>
      </div>
      <div className="md:text-right md:my-auto md:w-1/2 xl:w-3/4 md:ml-20 md:pt-0 pt-20 grid gap-6">
        <p>
          Throughout his artistic journey, Kurb has developed a body of work that spans multiple themes and styles. 
        </p>
        <p>
          His art is deeply personal, often drawing from lived experiences and broader societal observations. 
        </p>
        <p>
          His key series include: The Abuse of Beauty, Popartganda and Paint by Numbers – Meaning of Life.
        </p>
      </div>
    </div>
  )
}

export default IntroTwo