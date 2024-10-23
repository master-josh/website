import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import Footerpage from "./Components/Home/Footerpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footerpage />
      </BrowserRouter>
    </>
  );
}

export default App;
