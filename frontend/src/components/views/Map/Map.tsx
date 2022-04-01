import React, { useEffect, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Map as MapBox, Marker } from 'react-map-gl'
import { Drop } from '../../../types/Drop'
import { mailman } from '../../../utils/scripts/mailman'
import { Avatar, Drawer } from '../../shared'
import { CreateDrop } from '../../shared/CreateDrop'
import { StyledMap, MarkerButton } from './Map.Styled'

const Map: React.FC = () => {
   const [latitude, setLatitude] = useState(44.648766)
   const [longitude, setLongitude] = useState(-63.575237)
   const [id, setId] = useState('')
   const [show, setShow] = useState(false)
   const [drops, setDrops] = useState<Drop[]>([])

   const handleClick = (key) => {
      setId(key)
      setShow(true)
   }

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

      await Geolocation.watchPosition(
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
   }

   const getDrops = async () => {
      const res = await mailman('drops', 'GET', undefined, undefined, {
         currentCoordinates: [longitude, latitude],
      })
      setDrops(res)
   }

   useEffect(() => {
      loadInitialPosition()
   }, [])

   useEffect(() => {
      getDrops()
   }, [])

   return (
      <StyledMap>
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
            onLoad={() => listenForPosition()}
            pitch={50}
            minZoom={10}
            maxZoom={20}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            mapboxAccessToken="pk.eyJ1IjoicnViYmVyZHVjazMyMiIsImEiOiJjbDFmOTZmdHEwMmh4M2pyb2xwNTgyZjV6In0.cR7oCjjaMLDaG4jCy4nkUg"
         >
            <Marker longitude={longitude} latitude={latitude} style={{ zIndex: 1 }}>
               <div className="user-location-blip" />
            </Marker>

            {drops.map((key, index) => (
               <MarkerButton onClick={() => handleClick(key)}>
                  <Marker
                     longitude={longitude + 0.001 * index}
                     latitude={latitude + 0.001}
                     key={(key as any)._id}
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
