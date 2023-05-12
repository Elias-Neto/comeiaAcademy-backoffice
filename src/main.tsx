// React Imports
import React from 'react'

// Packages Imports
import ReactDOM from 'react-dom/client'

// Pages Imports
import App from './App.tsx'

// Styles Imports
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
