import React from "react";
// Recomendedmovies================================================
const Recomendedmovies = [
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0OTQuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-adtpyusrqu-portrait.jpg",
    RmName: "Salaar: Cease Fire - Part 1",
    RmType: "Action/Thriller",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380404-xltbhnjqyc-portrait.jpg",
    RmName: "Saba Nayagan",
    RmType: "Comedy/Romantic",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA5LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00378033-cgjbwrsmgr-portrait.jpg",
    RmName: "Conjuring Kannappan",
    RmType: "Comedy/Horror",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyMC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00321161-crtrbkrqdj-portrait.jpg",
    RmName: "Aquaman and the Lost Kingdom",
    RmType: "Action/Adventure/Fantasy/Superhero",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAyMjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00326964-gfhauqthan-portrait.jpg",
    RmName: "Dunki",
    RmType: "Comedy/Drama",
  },
];
function RecomendedMovies() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Recomended Movies</h2>
          <p className="see">See All</p>
        </div>
        <div className="Rmovies">
          {Recomendedmovies.map((item, i) => {
            return (
              <div className="rmoviesimg" key={i}>
                <img src={item.RmImgLink} alt="rmovies" />
                <h3>{item.RmName}</h3>
                <p>{item.RmType}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecomendedMovies;
