import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import { MAP_TEXTS } from "../../constants";
import "./Map.css";
import marker from "../../assets/marker.png";

// Erstellen eines benutzerdefinierten Icons für den Marker
const customIcon = new Icon({
  iconUrl: `${marker}`,
  iconSize: MAP_TEXTS.MARKER_SIZE,
});

// Map-Komponente mit forwardRef für die Weiterleitung von Refs
// Es ist wichtig, eine benannte Funktion innerhalb von forwardRef zu verwenden, sonst bekommen wir eine Fehlermeldung: Component definition is missing display name
export const Map = forwardRef(function Map({ onClose }, ref) {

  // Ref für den Marker, um darauf programmatisch zugreifen zu können
  const markerRef = useRef(null);

  // Effekt zum automatischen Öffnen des Popups nach dem Rendern
  useEffect(() => {
    // Verzögerung um sicherzustellen, dass die Karte vollständig geladen ist
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, MAP_TEXTS.POPUP_DELAY);

    // Aufräumen des Timers
    return () => clearTimeout(timer);
  }, []); // Leeres Dependency-Array bedeutet, der Effekt läuft nur einmal beim Mounten

  return (
    <div ref={ref} id="map" className='map'>
      {/* MapContainer ist der Hauptcontainer für die Leaflet-Karte */}
      <MapContainer center={MAP_TEXTS.MAP_CENTER} zoom={MAP_TEXTS.MAP_ZOOM} style={{height: MAP_TEXTS.MAP_HEIGHT, width: MAP_TEXTS.MAP_WIDTH}}>
        {/* TileLayer definiert die Quelle für die Kartenkacheln */}
        <TileLayer
          url={MAP_TEXTS.TILE_LAYER_URL}
          attribution={MAP_TEXTS.TILE_LAYER_ATTRIBUTION}
        />
        {/* Marker zeigt einen bestimmten Punkt auf der Karte an */}
        <Marker position={MAP_TEXTS.MAP_CENTER} icon={customIcon} ref={markerRef}>
          {/* Popup enthält Informationen, die angezeigt werden, wenn der Marker angeklickt wird */}
          <Popup>
            <p className="p__cormorant" style={{ color: "#000c", margin: "0 0 0.5rem 0" }}>{MAP_TEXTS.RESTAURANT_NAME}</p>
            <p className="p__cormorant" style={{ color: "#000c", margin: "0" }}>{MAP_TEXTS.RESTAURANT_ADDRESS}</p>
            <p className="p__cormorant" style={{ color: "#000c", margin: "0 0 0.5rem 0" }}>{MAP_TEXTS.RESTAURANT_CITY}</p>
            <p className="p__cormorant" style={{ color: "#000c", margin: "0" }}>{MAP_TEXTS.RESTAURANT_PHONE}</p>
          </Popup>
        </Marker>
        <button className="map-close-button" onClick={onClose}>{MAP_TEXTS.CLOSE_BUTTON_TEXT}</button>
      </MapContainer>
      
    </div>
  );
});

Map.propTypes = {
  onClose: PropTypes.func.isRequired
};
