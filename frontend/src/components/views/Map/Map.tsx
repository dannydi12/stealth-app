import React, { createRef, useEffect, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Map as MapBox, Marker, MapRef } from 'react-map-gl'
import { StyledMap } from '.'
import { Avatar } from '../../shared'
import { CreateDrop } from '../../shared/CreateDrop'

const Map: React.FC = () => {
  const mapRef = createRef<MapRef>()
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const loadInitialPosition = async () => {
    Geolocation.requestPermissions()
    const pos = await Geolocation.getCurrentPosition()
    const lat = pos?.coords.latitude || 0
    const long = pos?.coords.longitude || 0

    setLatitude(lat)
    setLongitude(long)
  }

  const listenForPosition = async () => {
    Geolocation.requestPermissions()

    await Geolocation.watchPosition({
      enableHighAccuracy: true,
    }, (data) => {
      const lat = data?.coords.latitude || 0
      const long = data?.coords.longitude || 0

      setLatitude(lat)
      setLongitude(long)
    })
  }

  useEffect(() => {
    loadInitialPosition()
  }, [])

   return (
    <StyledMap>
      {(!!longitude && !!latitude) && (
        <MapBox 
          initialViewState={{
            zoom: 18,
            longitude,
            latitude,
          }}
          longitude={longitude}
          latitude={latitude}
          ref={mapRef}
          logoPosition="top-left"
          attributionControl={false}
          dragPan={false}
          dragRotate={false}
          pitchWithRotate={false}
          doubleClickZoom={false}
          pitch={50}
          minZoom={10}
          maxZoom={20}
          onLoad={() => listenForPosition()}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxAccessToken="pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg"
        >
          <Marker longitude={longitude} latitude={latitude} style={{ zIndex: 1 }}>
            <div className="user-location-blip" />
          </Marker>

          {[0, 1, 2, 3, 4, 5, 6, 7].map((key, index) => (
            <Marker longitude={longitude + 0.001 * index} latitude={latitude + 0.001} key={key}>
              <Avatar avatar={{ color: 'orange', emoji: '👑' }} size={50} />
            </Marker>
          ))}
        </MapBox>
      )}
      
      <CreateDrop />
    </StyledMap>
   )
}

export default Map
