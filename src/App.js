import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
// import Banner from "./Components/Banner/Banner";
// import About from "./Components/About/About";
import About from "./Components/About/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        {/* <Banner /> */}
        <About />
        <WhatWeDo />
        <Footer />
      </div>
    </>
  );
}

export default App;
