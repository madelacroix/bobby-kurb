import HeroImg from "@/assets/landinghero.jpg"

const Hero = () => {
  return (
    <div>
        <div>
            <h1>Bobby Kurb</h1>
            <p>Currently based in New Zealand</p>
        </div>
        <div>
            <img src={HeroImg} alt="Hero Image"/>
        </div>
    </div>
  )
}

export default Hero