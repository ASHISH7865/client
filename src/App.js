import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav/Sidenav";
import Menu from "./Pages/Menu/Menu";
import "./App.css";

function App() {
  return (
    <>
      <div className="main__wrapper">
        <Sidenav />
        <div className="main__container">
          <Routes>
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
