import styled, { keyframes } from 'styled-components'

const blipKeyframes = keyframes`
  0 {
    box-shadow: 0 0 0 0 rgba(0, 122, 255, 1);
  }
  50% {
    box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 122, 255, 0);
  }
`

const StyledMap = styled.div`
  .mapboxgl-map, .mapboxgl-canvas-container {
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }

  .mapboxgl-ctrl-logo {
    display: none;
  }

  .user-location-blip {
    height: 20px;
    width: 20px;
    background: #007AFF;
    border-radius: 50%;
    border: 2px solid white;
    animation: ${blipKeyframes} infinite 2s;
  }
`

export default StyledMap
