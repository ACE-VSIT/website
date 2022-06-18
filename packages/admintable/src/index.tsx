import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto-slab/100.css'
import '@fontsource/roboto-slab/200.css'
import '@fontsource/roboto-slab/300.css'
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'
import '@fontsource/roboto-slab/800.css'
import '@fontsource/roboto-slab/900.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
