import {GoogleMap,LoadScript, Marker} from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%'
}

const center = {
    lat: 14.608887672424316,
    lng: 121.02196502685547,
};
const mapOptions = {
    disableDefaultUI: true,
  };
const markerOptions:google.maps.Icon = {
    url: '/images/icons/pin_map.png',
    scaledSize:{
        width: 100,
        height: 100,
    } as google.maps.Size
}
const GoogleMapsComponent = ({apiKey}: {apiKey:string|undefined}) => {
if(!apiKey) return <div>No API key</div>
return (
    <LoadScript googleMapsApiKey={apiKey}>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={mapOptions}>
    <Marker position={center} icon={markerOptions} />
    </GoogleMap>
    </LoadScript>
);
};

export default GoogleMapsComponent;