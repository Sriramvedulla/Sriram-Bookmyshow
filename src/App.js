import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Stream from "./Stream/Stream";
// import Footer from "./footer/Footer";
import Activities from "./Activities/Activities";
import Buzz from "./Buzz/Buzz";
import Worldcup from "./Worldcup/Worldcup";
import ListYourShow from "./ListYourShow/ListYourShow";
import Home from "./Home/Home";
import Sports from "./Sports/Sports";
import Events from "./Events/Events";

// import Slider from "./Slider/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/sports" element={<Sports></Sports>}></Route>
          <Route path="/activities" element={<Activities></Activities>}></Route>
          <Route path="/buzz" element={<Buzz></Buzz>}></Route>
          <Route path="/worldcup" element={<Worldcup></Worldcup>}></Route>
          <Route
            path="/listyourshow"
            element={<ListYourShow></ListYourShow>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
