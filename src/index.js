import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import 'reset.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
  ),
  document.getElementById('root'))
