import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PageWrapper } from '@/layout'
import { HomeModule, EventModule, CreateModule } from '@/modules'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeModule />,
    },
    {
        path: '/create',
        element: <CreateModule />,
    },
    {
        path: '/event/:id',
        element: <EventModule />,
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
