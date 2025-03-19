import Self from "@/assets/self.jpg"

const Hero = () => {
  return (
    <div className="grid gap-28 lg:gap-0 lg:grid-cols-2 lm:py-40 sm:py-20 xs:py-16 py-14 sm:px-32 xs:px-20 px-14">
      <div className="lg:mr-28 xl:m-auto">
        <h1 className="font-montserrat text-black sm:text-[4.8vh] xl:text-[5vh] xs:text-[4.2vh] text-[2.5vh] xs:font-light xs:py-10 py-8">Meet the Artist</h1>
        <p>
          Born in Auckland, New Zealand, in 1971, Bobby Kurb spent his early years immersed in the natural beauty of coastal life before moving to England at the age of five. The stark contrast between the open beach and the urban environment profoundly shaped his perspective, an influence that continues to inform his artistic practice. Despite a challenging childhood marked by adversity and personal struggles, Kurb found solace in art from a young age. His earliest memory of creating art dates back to drawing “bird men” — figures with human bodies, bird heads, and wheels for feet — when he was just five or six years old.
        </p>
      </div>
      <div className="lg:m-auto">
        <img src={Self} alt="Bobby Kurb self portrait"/>
      </div>
    </div>
  )
}

export default Hero