import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { StyledMap } from '.'

// TODO put this in .env file
mapboxgl.accessToken = 'pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg'

const Map: React.FC = () => {
   const mapContainer = useRef<any>(null);
   const map = useRef<mapboxgl.Map | null>(null);
   const [lat, setLat] = useState(34.19965158005756);
   const [lng, setLng] = useState(-118.32767444234798);
   const [zoom, setZoom] = useState(16);

   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: 'mapbox://styles/mapbox/streets-v11',
         center: [lng, lat],
         dragPan: false,
         zoom,
    })
   })
   
   return (
       <StyledMap>
            <div ref={mapContainer} className="map-container" />
       </StyledMap>
)
}

export default Map
