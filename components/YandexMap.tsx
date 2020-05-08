import { useState } from "react";
import { RenderMap } from "../utils/RenderMap";

export const YandexMap = (
  {
  YMConstant
  }:{YMConstant:string}
) => {
  const [clickMap, setClickMap] = useState(0)

  return (
    <>
      <div className="map-wrapper" onMouseEnter={()=>setClickMap(1)}>      
        {clickMap===1?
            <RenderMap />     
        :<div className="map-title__wrap"><h3>Кликните для управления картой</h3></div>}      
      </div>
    </>
)};