/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
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
   const [id, setId] = useState<string>()
   const [show, setShow] = useState(false)
   const [drops, setDrops] = useState<Drop[]>([])

   const handleClick = (key: string, isGray: boolean) => {
     if (!isGray) {
      setId(key)
      setShow(true)
     }
   }

   const handleClose = () => {
     setId(undefined)
     setShow(false)
   }

   const loadInitialPosition = async () => {
      Geolocation.requestPermissions()
      const pos = await Geolocation.getCurrentPosition()
      const lat = pos?.coords.latitude || 0
      const long = pos?.coords.longitude || 0

      setLatitude(lat)
      setLongitude(long)
   }

   const isGray = (drop: any) => {
     if (!drop || !drop.location) {
       return true
     }
     const yes1 = Math.abs(longitude - drop.location.coordinates[0]) > 0.01
     const yes2 = Math.abs(latitude - drop.location.coordinates[1]) > 0.01

      return yes1 && yes2
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

            {drops.map((drop: any) => (
               <MarkerButton onClick={() => handleClick(drop._id, isGray(drop))}>
                  <Marker
                     longitude={drop.location.coordinates[0]}
                     latitude={drop.location.coordinates[1]}
                     key={drop._id}
                  >
                     <Avatar isDisabled={isGray(drop)} avatar={{ color: drop.author?.avatar?.color || '', emoji: drop.author?.avatar?.pfp || '' }} size={50} />
                  </Marker>
               </MarkerButton>
            ))}
         </MapBox>
         {id && <Drawer id={id} show={show} handleClose={() => handleClose()} />}
         {!show && <CreateDrop />}
      </StyledMap>
   )
}

export default Map
