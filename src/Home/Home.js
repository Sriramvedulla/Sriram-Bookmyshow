import React from "react";
import "./Home.css";
import LaughterTherapy from "./LaughterTherapy";
import LiveEvents from "./LiveEvents";
import OnlineStreamingEvents from "./OnlineStreamingEvents";
import OutdoorEvents from "./OutdoorEvents";
import PopularEvents from "./PopularEvents";
import Premiers from "./Premier";
import RecomendedMovies from "./RecommendedMovies";

function Home() {
  return (
    <div>
      {/* ICC MEN'S CRICKET WORLD CUP INDIA 2023  */}
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "5%",
        }}
      />
      <RecomendedMovies></RecomendedMovies>

      {/* Endless entertainment image */}
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "5%",
        }}
      />
      <LiveEvents></LiveEvents>
      <Premiers></Premiers>
      <OnlineStreamingEvents></OnlineStreamingEvents>
      <OutdoorEvents></OutdoorEvents>
      <LaughterTherapy></LaughterTherapy>
      <PopularEvents></PopularEvents>
    </div>
  );
}

export default Home;
