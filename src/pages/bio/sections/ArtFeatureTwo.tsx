import ArtImg from "@/assets/feature-cropped.png"

const ArtFeatureTwo = () => {
  return (
    <div className="lm:bg-art-feature-two lm:bg-cover lm:h-screen lm:bg-center lm:grid lm:grid-cols-2 lm:pt-0 pt-32 bg-[#1B1F20] text-white">
      <div className="lm:col-start-2 lm:flex">
        <p className="rotate-180 -ml-8 py-5 text-[1vh] lm:block hidden" style={{ writingMode: "vertical-rl" }}>
          “Paint by Numbers” © 2025
        </p>        
        <div className="lm:m-auto lm:text-right sm:px-32 xs:px-20 px-14 pb-32">
          <h1 className="font-bold italic">
            Paint by Numbers – The Meaning of Life
          </h1>
          <p>
            A commentary on the monotony and structure of modern existence. From a distance, these works appear orderly and harmonious, yet upon closer examination, they reveal deeper layers of turmoil and complexity—an analogy for human life itself.
          </p>        
        </div>
        <div className="lm:hidden">
          <img src={ArtImg} alt="Paint by Numbers painting by Bobby Kurb" className="max-lm:w-full"/>
        </div>
      </div>
    </div>
  )
}

export default ArtFeatureTwo