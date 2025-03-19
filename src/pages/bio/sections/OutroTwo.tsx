import OutroImg from "@/assets/hand.jpg"

const OutroTwo = () => {
  return (
    <div className="py-52 px-32 flex">
      <div>
        <img src={OutroImg} alt="Bobby Kurb's hand painting a portrait"/>
      </div>
      <div className="w-3/4 text-right m-auto pl-32 grid gap-5">
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