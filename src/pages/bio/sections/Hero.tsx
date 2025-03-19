import Self from "@/assets/self.jpg"

const Hero = () => {
  return (
    <div className="grid grid-cols-2 py-40 px-32">
      <div className="mr-28">
        <h1 className="font-montserrat text-black text-[5vh] font-light py-10">Meet the Artist</h1>
        <p className="text-[1.6vh]">
          Born in Auckland, New Zealand, in 1971, Bobby Kurb spent his early years immersed in the natural beauty of coastal life before moving to England at the age of five. The stark contrast between the open beach and the urban environment profoundly shaped his perspective, an influence that continues to inform his artistic practice. Despite a challenging childhood marked by adversity and personal struggles, Kurb found solace in art from a young age. His earliest memory of creating art dates back to drawing “bird men” — figures with human bodies, bird heads, and wheels for feet — when he was just five or six years old.
        </p>
      </div>
      <div>
        <img src={Self} alt="Bobby Kurb self portrait"/>
      </div>
    </div>
  )
}

export default Hero