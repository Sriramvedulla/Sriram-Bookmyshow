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
import Giftcards from "./Giftcards/Giftcards";
import Allgifts from "./Giftcards/Allgifts";
import Egiftcard from "./Giftcards/Egiftcard";
import Corporatesbody from "./Corporates/Corporates";
import Offers from "./Offers/Offers";
import Plays from "./Plays/Plays";
import Movies from "./Movies/Movies";
import { movietheaters } from "./Utils/BuyTicketsData";
import BuyTickets from "./components/BuyTickets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/stream" element={<Stream></Stream>} />
          <Route path="/movies" element={<Movies></Movies>} />
          <Route path="/events" element={<Events></Events>} />
          <Route path="/sports" element={<Sports></Sports>} />
          <Route path="/activities" element={<Activities></Activities>} />
          <Route path="/buzz" element={<Buzz></Buzz>} />
          <Route path="/plays" element={<Plays></Plays>} />
          <Route path="/worldcup" element={<Worldcup></Worldcup>} />
          <Route path="/offers" element={<Offers></Offers>} />
          <Route path="/listyourshow" element={<ListYourShow></ListYourShow>} />
          <Route path="/gifts" element={<Giftcards></Giftcards>}>
            <Route path="/gifts" element={<Allgifts />} />
            <Route path="/gifts/physical" element={<Egiftcard />} />
          </Route>
          <Route
            path="corporates"
            element={<Corporatesbody></Corporatesbody>}
          />
          <Route
            path="/jailerTickets"
            element={
              <BuyTickets
                movieName="Saba Nayagan"
                movieTicketsArray={movietheaters.JailerTelugu_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
          <Route
            path="/jawanTickets"
            element={
              <BuyTickets
                movieName="Salaar: Cease Fire - Part 1"
                movieTicketsArray={movietheaters.JawanHindi_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
          <Route
            path="/jailerTickets"
            element={
              <BuyTickets
                movieName="Saba Nayagan"
                movieTicketsArray={movietheaters.JailerTelugu_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
          <Route
            path="/jawanTickets"
            element={
              <BuyTickets
                movieName="Salaar: Cease Fire - Part 1"
                movieTicketsArray={movietheaters.JawanHindi_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
