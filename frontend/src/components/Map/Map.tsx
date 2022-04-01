import React, { useCallback, useEffect, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Map as MapBox, useMap, GeolocateControl } from 'react-map-gl'
import { StyledMap } from '.'

const Map: React.FC = () => {
  const { current: map } = useMap()
  const [latitude, setLatitude] = useState(44.648766)
  const [longitude, setLongitude] = useState(-63.575237)
  const [heading, setHeading] = useState(0)

  const geolocateControlRef = useCallback((ref) => {
    if (ref) {
      ref.trigger()
    }
  }, [])

  const getPosition = () => {
    /*
    map.track
    mapView.location.options.puckType = .puck2D()
    */
  }

  useEffect(() => {
    getPosition()
    /*
    Geolocation.requestPermissions()

    Geolocation.watchPosition({
      enableHighAccuracy: true,
    }, (data) => {
      setLatitude(data?.coords.latitude || 0)
      setLongitude(data?.coords.longitude || 0)
      setHeading(data?.coords.heading || 0)
    })
    */
  }, [])

   return (
    <StyledMap>
      <MapBox 
        initialViewState={{
          zoom: 20,
        }}
        pitch={50}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken="pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg"
      >
        <GeolocateControl 
          showAccuracyCircle={true} 
          trackUserLocation={true} 
          ref={geolocateControlRef} 
        />
      </MapBox>
      <div className="terminal">
        <pre>
          <code>
            LONG: {longitude}<br />
            LAT: {latitude}<br />
            HEADING: {heading}
          </code>
        </pre>
      </div>
    </StyledMap>
   )
}

export default Map
