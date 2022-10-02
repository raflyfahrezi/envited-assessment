import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app'
import { Globals } from '@/styles'

import '@fontsource/open-sans'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Globals />
        <App />
    </React.StrictMode>
)
