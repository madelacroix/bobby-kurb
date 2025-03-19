import IntroTwoImg from "@/assets/photoshoot.jpg"

const IntroTwo = () => {
  return (
    <div className="py-40 px-32 flex justify-around">
      <div className="mr-10">
        <img src={IntroTwoImg} alt="Image of photoshoot"/>
      </div>
      <div className="text-right m-auto w-1/2 ml-20 grid grid-rows-3 gap-8">
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