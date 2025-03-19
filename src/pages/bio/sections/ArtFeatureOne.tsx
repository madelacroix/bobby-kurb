import ArtImg from "@/assets/abuse of beauty.jpg"

const ArtFeatureOne = () => {
  return (
    <div className="flex bg-[#DFDFDF]">
      <div className="m-auto w-3/4 px-32">
        <p>
          <span className="font-bold italic">The Abuse of Beauty</span> – A poignant exploration of violence against women, inspired by a haunting encounter with a young woman bearing visible signs of abuse. This series reflects the raw emotions and enduring impact of such injustices.
        </p>
      </div>
      <div className="flex">
        <p className="rotate-180 text-[0.9vh] py-5 px-1" style={{ writingMode: "vertical-rl" }}>“The Abuse of Beauty I” © 2024</p>
        <img src={ArtImg} alt="Abuse of Beauty by Bobby Kurb"/>
      </div>
    </div>
  )
}

export default ArtFeatureOne