import React from "react";
// Recomendedmovies================================================
const Recomendedmovies = [
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDcuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    RmName: "Jailor",
    RmType: "Action/Drama/Thriller",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDUuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    RmName: "Gadar 2:The Katha..",
    RmType: "Action/Drama/Period",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-hadftxleau-portrait.jpg",
    RmName: "Gandheevadhari Arjuna",
    RmType: "Action/Thriller",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTA1LjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
    RmName: "Kings of Kotha",
    RmType: "Action/Crime/Drama",
  },
  {
    RmImgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI1LjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
    RmName: "Dream Girl2",
    RmType: "Comedy/Drama/Romantic",
  },
];
function RecomendedMovies() {
  return (
    <div>
      <div className="movies">
        <div className="Movies">
          <h2>Recomended Movies</h2>
          <p>See All</p>
        </div>
        <div className="Rmovies">
          {Recomendedmovies.map((item) => {
            return (
              <div>
                <img src={item.RmImgLink} alt="" />
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
