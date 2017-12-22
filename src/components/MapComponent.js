import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 42.284554, lng: -83.792112 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 42.284554, lng: -83.792112 }} />}
  </GoogleMap>
))

export default MapComponent
