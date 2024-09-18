import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet styles
import L from 'leaflet'; // Import Leaflet for marker icons

const API_ENDPOINT = 'http://127.0.0.1:8000'; // Replace with your API endpoint

// Fetch user location from the API
const fetchUserLocationById = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/locations/all/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }

    const data = await response.json();
    console.log('User location data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching location:', error);
    alert('Error fetching location');
    return [];
  }
};

// Configure default center and zoom level
const center = {
  lat: 0,
  lng: 0,
};
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Fix leaflet marker icon loading issue (if necessary)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const UserLocationScreen = () => {
  const [locations, setLocations] = useState([]);
  const { userId } = useParams(); // Assuming userId is required

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserLocationById(userId);
      setLocations(data);
    };

    getData();
  }, [userId]);

  const mapCenter = locations.length > 0
    ? [locations[0].latitude, locations[0].longitude] // Center map on first location
    : [center.lat, center.lng]; // Default to (0,0) if no locations

  return (
    <div style={containerStyle}>
      <MapContainer center={mapCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(location => (
          <Marker key={location.id} position={[location.latitude, location.longitude]}>
            <Popup>
              <div>
                <p>Timestamp: {location.timestamp}</p>
                <p>Latitude: {location.latitude}</p>
                <p>Longitude: {location.longitude}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserLocationScreen;

