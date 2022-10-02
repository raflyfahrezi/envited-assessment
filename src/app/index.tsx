import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeModule />,
    },
])

const App = () => {
    return (
        <PageWrapper>
            <RouterProvider router={router} />
        </PageWrapper>
    )
}

export default App
