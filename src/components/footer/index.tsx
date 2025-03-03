import Logo from "@/assets/bk-logo.png"
import Link from "../navbar/Link"
import { SelectedPage } from "@/shared/types"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="py-20 bg-white">
        <nav className="grid grid-cols-3 pb-10">
            <div className="flex justify-evenly">
                <Link
                    page="Home"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                />
                <Link
                    page="Bio"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                />
                <Link
                    page="Works"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                />
            </div>
            <div className="m-auto">
                <img src={Logo} alt="bobby kurb" className="w-8"/>
            </div>
            <div className="flex justify-evenly">
                <Link
                    page="Blog"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                />
                <Link
                    page="Contact"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                />
            </div>
        </nav>
        <hr/>
        <div className="flex justify-center pt-10">
            <p>
                Made by{" "}
                <a href="https://www.madeldelacruz.com/">mads</a> & <span>day</span>.
            </p>
        </div>
    </div>
  )
}

export default Footer