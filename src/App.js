import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav/Sidenav";
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="main__wrapper">
        <Sidenav />
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
