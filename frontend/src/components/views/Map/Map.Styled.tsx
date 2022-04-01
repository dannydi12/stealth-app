import styled from 'styled-components'

export const StyledMap = styled.div`
   position: relative;
   width: 100%;
   height: 100vh;
   .mapboxgl-map,
   .mapboxgl-canvas-container {
      position: absolute !important;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100% !important;
      height: 100% !important;
   }

   .terminal {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.75);
      z-index: 9999999;
      color: white;
   }

   .mapboxgl-ctrl-logo {
      display: none;
   }

   .user-location-blip {
      height: 20px;
      width: 20px;
      background: #007aff;
      border-radius: 50%;
      border: 2px solid white;
   }
`

export const MapOverlay = styled.div`
   position: absolute;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.7);
   width: 100%;
   height: 100%;
   z-index: 1;
`

export const MarkerButton = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   background-color: transparent;
`

export const Footer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: 0;
   height: 92px;
   width: 100%;
   background-color: #27272a;
`
