import React, { useEffect, useRef, useState } from 'react'
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps"
import Loader from '../components/Loader';

const mapData = {
    center: [55.7525, 37.573856],
    zoom: 14,
    controls: [],
  };

const coordinates = [
    [55.7525, 37.573856],
    // [57.684758, 39.738521]
  ];
  
export const RenderMap = () => {
    // Для подгрузки карты при наведении мыши
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
      counter.current += 1;
      if (counter.current >= coordinates.length) {
        setLoading(false);
      }
    }

    return (
      <>
        <div style={{display: loading ? "flex" : "none"}} className='map-title__wrap'>
            <Loader />
        </div>
        <YMaps>
            <Map defaultState={mapData} width={'100%'} height={'100%'}>
                {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} onLoad={imageLoaded}/>)}
                <ZoomControl options={{ float: 'right' }} />
            </Map>            
        </YMaps> 
      </>
    )
  }
