import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './Components/App'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { reducers } from './Components/Reducers'
import thunk from 'redux-thunk'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
