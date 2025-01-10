import Logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <div>
        <nav>
            <div>
                <a>Home</a>
                <a>Bio</a>
            </div>
            <div>
                <img src={Logo} alt="bobby kurb"/>
            </div>
            <div>
                <a>Works</a>
                <a>Blog</a>
            </div>
        </nav>
        <hr/>
        <div>
            <p>
                Made by
                <span>mads</span> & <span>day</span>.
            </p>
        </div>
    </div>
  )
}

export default Footer