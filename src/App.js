import "./App.css";
import Header from "./components/Header";
import Footer from "./footer/Footer";
import ListYourShow from "./ListYourShow.js/ListYourShow";
// import Slider from "./Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListYourShow></ListYourShow>
      <Footer></Footer>
    </div>
  );
}

export default App;
