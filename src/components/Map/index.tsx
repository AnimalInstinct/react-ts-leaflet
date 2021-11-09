import { GeoJsonObject } from 'geojson'
import React from "react";
import { MapContainer, GeoJSON, GeoJSONProps} from "react-leaflet";
import "./map.scss";

import russiaDistrictsData from './russia.json';
import federalDistricts from './federalDistricts.json'
import { GeoJSONEvent } from 'leaflet'

const Map = () => {
  const mapStyle = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
  };

  const countryStyle = {
    fillColor: 'gray',
    fillOpacity: 0.5,
    color: 'white',
    weight: 1
  }



  const featureAction = (district:any, layer:any) => {
    const name = district.properties.name;
    console.log(district.properties.name);
    console.log(layer);
    layer.bindPopup(name);
    layer.on({click: (e: GeoJSONEvent) => {
      const target = e.target
      console.log('Clicked::', target.feature.properties.name);
    }})
  }

  return (
    <>
    <h1>Районы</h1>
    <MapContainer
      center={[63.39,109.16]}
      zoom={3}
      scrollWheelZoom={false}
      style={mapStyle}
    >
      <GeoJSON style={countryStyle} data={russiaDistrictsData as GeoJsonObject} onEachFeature={featureAction}/>
      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
      /> */}
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
    <h1>Федеральные округа</h1>
    <MapContainer
    center={[63.39,109.16]}
    zoom={3}
    scrollWheelZoom={false}
    style={mapStyle}
  >
    <GeoJSON style={countryStyle} data={federalDistricts as GeoJsonObject}  onEachFeature={featureAction}/>
    {/* <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
    /> */}
    {/* <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
  </MapContainer>
  <h2><a href="https://github.com/AnimalInstinct/react-ts-leaflet">Github</a></h2>
  </>
  );
};

export default Map;
