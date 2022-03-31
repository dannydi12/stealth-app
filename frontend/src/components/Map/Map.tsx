import React, { useRef, useEffect, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import mapboxgl from 'mapbox-gl'
import { StyledMap } from '.'

// TODO put this in .env file
mapboxgl.accessToken = 'pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg'

const Map: React.FC = () => {
   const mapContainer = useRef<any>(null);
   const map = useRef<mapboxgl.Map | null>(null);
   const [watchId, setWatchId] = useState('')
   const [lat, setLat] = useState(34.19965158005756);
   const [lng, setLng] = useState(-118.32767444234798);
   const [zoom, setZoom] = useState(16);

   const watchMe = async () => {
    const watch = await Geolocation.watchPosition({
      enableHighAccuracy: true,
    }, (data) => {
      setLat(data?.coords.latitude || 0)
      setLng(data?.coords.longitude || 0)
    })

    setWatchId(watch)
   }

   useEffect(() => {
    map.current?.panTo([lng, lat])
   }, [lat, lng])

   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: 'mapbox://styles/mapbox/dark-v10',
         center: [lng, lat],
         dragPan: false,
         zoom,
      })
  }, [])

   useEffect(() => {
      watchMe()
      return () => {
        Geolocation.clearWatch({ id: watchId })
      }
    }, [])
   
   return (
      <StyledMap>
         <div ref={mapContainer} className="map-container" />
      </StyledMap>
   )
}

export default Map
