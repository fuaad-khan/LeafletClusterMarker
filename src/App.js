import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function App() {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am a pop up",
    },

    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am a pop up2",
    },

    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am a pop up3",
    },
  ];

  const customIcon = new Icon({
    //iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
    iconUrl: require("./Image/placeholder.png"),
    iconSize: [38, 38], //size of icon
  });

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
