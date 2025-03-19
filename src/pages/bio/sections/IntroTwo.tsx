import IntroTwoImg from "@/assets/photoshoot.jpg"

const IntroTwo = () => {
  return (
    <div className="py-52 px-32 flex justify-between">
      <div className="mr-10">
        <img src={IntroTwoImg} alt="Image of photoshoot"/>
      </div>
      <div className="text-right my-auto w-1/2 xl:w-3/4 ml-20 grid gap-6">
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