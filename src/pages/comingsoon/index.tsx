import EmailIcon from "@/assets/mail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-comingsoon bg-no-repeat bg-cover grid grid-cols-2">
      <div className="text-white pt-40 mx-40">
        <div>
          <h1 className="italic text-[5.5rem] tracking-[-0.05em]">Coming Soon</h1>
          <h2 className="text-[1.7rem] font-comfortaa font-light tracking-[0.01em] -mt-4">Bobby Kurb</h2>
        </div>
        <div className="mt-20">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-3 mr-10 w-1/2 opacity-70 text-black"              
            />
            <button className="bg-white text-black text-sm py-3.5 px-12 rounded-lg transition duration-500 hover:bg-pink-200 hover:text-gray-600">Notify Me</button>
          </div>
          <p className="mt-5 text-xs">Notify me when the website is launched</p>
        </div>
      </div>
      <div className="flex flex-col-reverse text-white">
        <div className="py-12 font-light pl-14">
          <div className="comingsoon-links">
            <img src={EmailIcon} alt="Email icon"/>
            <button>info@bobbykurb.com</button>
          </div>
          <div className="comingsoon-links">
            <img src={LinkedInIcon} alt="LinkedIn icon"/>
            <button>linkedin.com/bobbykurb</button>
          </div>
          <div className="comingsoon-links">
            <img src={InstagramIcon} alt="Instagram icon"/>
            <button>instagram.com/bobbykurb</button>
          </div>
          <div className="comingsoon-links">
            <img src={FacebookIcon} alt="Facebook icon"/>
            <button>facebook.com/bobbykurb</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon