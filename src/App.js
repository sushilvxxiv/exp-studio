import "./App.css";
import Menu from "./components/Menu";
import Data from "./components/Data";
import Design from "./components/Design";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkFlow from "./components/WorkFlow";
import Logs from "./components/Logs";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Gpt from "./components/Gpt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu-part">
          <Menu />
        </div>
        <div className="home-part">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/data" element={<Data />} />
            <Route path="/workflow" element={<WorkFlow />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/gpt" element={<Gpt />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
