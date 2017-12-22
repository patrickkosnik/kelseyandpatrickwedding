import React from 'react'
import Location from 'containers/Location'
import HomePage from 'containers/HomePage'
import Rsvp from 'containers/Rsvp'
import Registry from 'containers/Registry'
import { Link, Route } from 'react-router-dom'

const App = () => (
<div>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/location" component={Location}/>
  <Route exact path="/rsvp" component={Rsvp}/>
  <Route exact path="/registry" component={Registry}/>
</div>
)

export default App
