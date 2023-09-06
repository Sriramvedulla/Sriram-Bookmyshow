import React from "react";
// TheBestOfLiveEvents ===========================================

const TheBestOfLiveEvents = [
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
  },
  {
    TheBestOfLiveevEventsImg:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
  },
];
function LiveEvents() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>The Best Of Live Events</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {TheBestOfLiveEvents.map((item) => {
            return (
              <div className="rmoviesimg">
                <img src={item.TheBestOfLiveevEventsImg} alt="rmovies" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LiveEvents;
