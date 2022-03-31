import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { StyledMap } from '.'

// TODO put this in .env file
mapboxgl.accessToken = 'pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg'

const Map: React.FC = () => {
   // defaults for the initial latitude, longitude, and zoom of the map
   const mapContainer = useRef<any>(null);
   const map = useRef<mapboxgl.Map | null>(null);
   const [lat, setLat] = useState<string | number>(34.19965158005756);
   const [lng, setLng] = useState<string | number>(-118.32767444234798);
   const [zoom, setZoom] = useState<string | number>(16);

   // initialize map
   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: 'mapbox://styles/mapbox/dark-v10',
         center: [lng as number, lat as number],
         dragPan: false,
         zoom: zoom as number,
      })
   })

   useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current!.getCenter().lng.toFixed(4));
      setLat(map.current!.getCenter().lat.toFixed(4));
      setZoom(map.current!.getZoom().toFixed(2));
      });
      });
   
   return (
      <StyledMap>
         <div ref={mapContainer} className="map-container" />
      </StyledMap>
   )
}

export default Map
