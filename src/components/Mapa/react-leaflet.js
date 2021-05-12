import React, { Component } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./react-leaflet.css";
import logo from "./react-leaflet-icon";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { lat: 40.4165, lng: -3.70256 },
      zoom: 15,
    };
  }

  render() {
    const { position, zoom } = this.state;
    return (
      <MapContainer
        key={JSON.stringify(this.props.data)}
        center={
          Object.keys(this.props.data).length !== 0
            ? this.props.data
            : position
        }
        zoom={zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution={<a href="https://osm.org/copyright">OpenStreetMap</a>}
          contributors
        />
        {Object.keys(this.props.data).length !== 0 ? (
          <Marker position={this.props.data} icon={logo}></Marker>
        ) : (
          ""
        )}
      </MapContainer>
    );
  }
}

export default MapView;
