import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
// import ComingSoon from "./pages/comingsoon"
import { SelectedPage } from "./shared/types"
import IndexInitial from "./pages/index-initial";
import Footer from "./components/footer";
import Contact from "./pages/contact";

function App() {  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);        
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Routes>
        <Route path="/" element={<IndexInitial setSelectedPage={setSelectedPage}/>}/>
        <Route path="/home" element={<Navigate to="/" replace/>}/>
        <Route path="/contact" element={<Contact setSelectedPage={setSelectedPage}/>}/>
      </Routes>

      <Footer
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </Router>
  )
}

export default App
