import EmailIcon from "@/assets/mail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-comingsoon bg-no-repeat bg-cover lm:bg-center grid grid-rows-2 lg:grid-cols-2">
      <div className="text-white pt-48 xl:pt-40 mx-8 xs:mx-auto lm:ml-40 ">
        <div>
          <h1 className="italic text-[3rem] xs:text-[4rem] sm:text-[5rem] xl:text-[5.5rem] xs:tracking-[-0.05em]">Coming Soon</h1>
          <h2 className="text-[1.2rem] sm:text-[1.5rem] xl:text-[1.7rem] font-comfortaa font-light tracking-[0.01em] -mt-2 xs:-mt-4">Bobby Kurb</h2>
        </div>
        <div className="mt-16 sm:mt-20">
          <p className="mb-2 text-sm sm:hidden">Notify me when the website is launched</p>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-3 sm:mr-6 xl:mr-10 w-full sm:w-[22em] xl:w-[25em] opacity-70 text-black"              
            />
            <button className="bg-white text-black sm:text-sm py-4 sm:py-3.5  px-16 sm:px-12 rounded-lg transition duration-500 hover:bg-pink-200 hover:text-gray-600 mt-5 sm:mt-0">Notify Me</button>
          </div>
          <p className="mt-5 text-xs hidden sm:visible">Notify me when the website is launched</p>
        </div>
      </div>
      <div className="flex flex-col-reverse text-white">
        <div className="py-12 font-light mx-auto sm:ml-40 lg:pl-24 xxl:pl-14 text-lg">
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