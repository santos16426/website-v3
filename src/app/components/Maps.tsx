import { Map, MapMarker } from './ui/map'

const center: [number, number] = [121.02196502685547, 14.608887672424316] // [lng, lat] format for MapLibre

const GoogleMapsComponent = () => {
  return (
    <Map center={center} zoom={10} className="w-full h-full min-h-[300px] md:min-h-0" theme="dark">
      <MapMarker
        position={center}
        icon="/images/icons/pin_map.png"
        iconSize={[120, 120]}
        anchor="center"
      />
    </Map>
  )
}

export default GoogleMapsComponent
