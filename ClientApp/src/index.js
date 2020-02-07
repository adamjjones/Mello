import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './registerServiceWorker'
import { Auth0Provider } from './react-auth0-wrapper'
import config from './auth_config.json'
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducers/rootReducer'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}><App /></Provider>
  </Auth0Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
