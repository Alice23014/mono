import { Placemark, YMaps, Map as YandexMap } from "@pbe/react-yandex-maps";

import MapPin from "../../../assets/images/map-pin.svg";
import { placemarks } from "../../../shared/mocks/placemark-mock";

import "./map.module.sass";

export const Map = () => {
  return (
    <div>
      <YMaps>
        <YandexMap
          height={"600px"}
          defaultState={{ center: [55.75, 37.57], zoom: 5 }}
        >
          {placemarks.map((placemark) => (
            <Placemark
              key={placemark.id}
              geometry={[placemark.lat, placemark.long]}
              options={{
                iconLayout: "default#image",
                iconImageHref: MapPin,
                iconImageSize: [30, 28],
                iconContentOffset: [0, 15],
              }}
            />
          ))}
        </YandexMap>
      </YMaps>
    </div>
  );
};
