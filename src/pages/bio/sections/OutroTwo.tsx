import OutroImg from "@/assets/hand.jpg"

const OutroTwo = () => {
  return (
    <div className="lg:py-52 pb-52 sm:px-32 xs:px-20 px-14 flex max-lm:flex-col-reverse">
      <div>
        <img src={OutroImg} alt="Bobby Kurb's hand painting a portrait" className="m-auto lg:m-0 max-lm:w-full"/>
      </div>
      <div className="lm:w-3/4 lm:text-right m-auto lm:pl-32 lm:pb-0 pb-20 grid gap-5">
        <p>
          Influenced by a diverse range of artists, including Joan Mitchell, Willem de Kooning, Camille Pissarro, Lucian Freud, Ralph Hotere, Ben Nicholson, and Marco Grassi, Kurb approaches art with an unfiltered philosophy: 
        </p>
        <p className="font-semibold">
          Keep it real—just do it.
        </p>
        <p>
          He dismisses the notion of art being dictated by critics or academic validation, advocating instead for the intrinsic value of creative expression.
        </p>
      </div>
    </div>
  )
}

export default OutroTwo