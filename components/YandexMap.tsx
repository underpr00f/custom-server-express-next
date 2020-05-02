import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [55.7525, 37.573856],
  zoom: 14,
  controls: [],
};

const coordinates = [
  [55.7525, 37.573856],
  // [57.684758, 39.738521]
];

export const YandexMap = () => (
  <div className="map-wrapper">
    <YMaps>
      <Map defaultState={mapData} width={'100%'} height={'100%'}>
        {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)}
      </Map>
    </YMaps>
  </div>
);