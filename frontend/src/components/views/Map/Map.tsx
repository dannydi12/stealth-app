import React, { useEffect, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Map as MapBox, Marker } from 'react-map-gl'
import { Avatar, Drawer } from '../../shared'
import { CreateDrop } from '../../shared/CreateDrop'
import { PostMessage } from '../../shared/PostMessage'
import { StyledMap, MarkerButton, MapOverlay, Footer } from './Map.Styled'

const Map: React.FC = () => {
   const [latitude, setLatitude] = useState(44.648766)
   const [longitude, setLongitude] = useState(-63.575237)
   const [id, setId] = useState('')
   const [show, setShow] = useState(false)

   const handleClick = (key) => {
      console.log(key)
      setId(key)
      setShow(true)
   }

   const handleSubmit = (e: any, data: string) => {
      e.preventDefault()
      console.log(data)
   }

   useEffect(() => {
      Geolocation.requestPermissions()
      Geolocation.watchPosition(
         {
            enableHighAccuracy: true,
         },
         (data) => {
            const lat = data?.coords.latitude || 0
            const long = data?.coords.longitude || 0

            setLatitude(lat)
            setLongitude(long)
         },
      )
   }, [])

   return (
      <StyledMap>
         {show && <MapOverlay onClick={() => setShow(false)} />}
         <MapBox
            initialViewState={{
               zoom: 18,
            }}
            latitude={latitude}
            longitude={longitude}
            logoPosition="top-left"
            attributionControl={false}
            dragPan={false}
            dragRotate={false}
            pitchWithRotate={false}
            doubleClickZoom={false}
            pitch={50}
            minZoom={10}
            maxZoom={20}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            mapboxAccessToken="pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg"
         >
            <Marker longitude={longitude} latitude={latitude}>
               <div className="user-location-blip" />
            </Marker>

            {[0, 1, 2, 3, 4, 5, 6, 7].map((key, index) => (
               <MarkerButton onClick={() => handleClick(key)}>
                  <Marker
                     longitude={longitude + 0.001 * index}
                     latitude={latitude + 0.001}
                     key={key}
                  >
                     <Avatar avatar={{ color: 'orange', emoji: '👑' }} size={50} />
                  </Marker>
               </MarkerButton>
            ))}
         </MapBox>
         <Drawer id={id} show={show} handleClose={() => setShow(false)} />
         {!show && <CreateDrop />}
      </StyledMap>
   )
}

export default Map
