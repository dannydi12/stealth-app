import styled from 'styled-components'

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
    background: #007AFF;
    border-radius: 50%;
    border: 2px solid white;
  }
`

export default StyledMap