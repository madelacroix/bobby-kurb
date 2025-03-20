import OutroImg from "@/assets/hope.jpg"

const OutroOne = () => {
  return (
    <div className="lm:flex lm:py-52 py-40 sm:px-32 xs:px-20 px-14">
      <div className="lm:w-3/4 m-auto lm:mr-32 grid xs:grid-rows-2 gap-5">
        <p>
          Kurb’s work has been exhibited internationally, with pieces held in both private and corporate collections across the world. A notable highlight includes his solo exhibition at Aigantighe Art Gallery, where a nine-meter canvas was showcased unexpectedly as the sole work on display for three weeks. 
        </p>
        <p>
          Despite the challenges of the art industry—including exploitative dealings with agents and financial losses—he remains committed to his craft, believing that success is measured not by recognition but by perseverance and authenticity.          
        </p>
      </div>
      <div className="sm:pt-10 xs:pt-8 pt-20">
        <img src={OutroImg} alt="Image of Bobby Kurb painting" className="m-auto lm:m-0 max-lg:w-full"/>
      </div>
    </div>
  )
}

export default OutroOne