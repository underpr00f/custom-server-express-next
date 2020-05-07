import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useState } from "react";
// import { YMap } from "../utils/YMap";

const mapData = {
  center: [55.7525, 37.573856],
  zoom: 14,
  controls: [],
};

const coordinates = [
  [55.7525, 37.573856],
  // [57.684758, 39.738521]
];


// const renderMap = () => {
//   return (
//     <>
//       {/* <YMap YMConstant={YMConstant}/> */}
//       <div className="map-wrapper">
//       <YMaps>
//         <Map defaultState={mapData} width={'100%'} height={'100%'}>
//           {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)}
//         </Map>
//       </YMaps>  
//       {/* <div className="loader loader-default"></div>  
//       <div id="map"></div> */}
//     </div>
//     </>
//   )
// }
export const YandexMap = (
  {
  YMConstant
  }:{YMConstant:string}
) => {
  const [clickMap, setClickMap] = useState(0)
  const renderMap = () => {
    return (
      <>
        {/* <YMap YMConstant={YMConstant}/> */}
        {/* <div className="map-wrapper"> */}
        <YMaps>
          <Map defaultState={mapData} width={'100%'} height={'100%'}>
            {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)}
          </Map>
        </YMaps>  
        {/* <div className="loader loader-default"></div>  
        <div id="map"></div> */}
      {/* </div> */}
      </>
    )
  }
  return (
    <>
      <div className="map-wrapper" onClick={()=>setClickMap(1)}>      
        {clickMap===1?renderMap():<div className="map-title__wrap"><h3>Кликните для управления картой</h3></div>}
      </div>
    </>
)};