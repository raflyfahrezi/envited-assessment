import React from 'react'
import { Helmet } from 'react-helmet'

import { sPageWrapper } from './styles'
import { PageWrapperProps } from './types'

import Footer from '../footer'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Helmet>
                <title>Envited</title>
            </Helmet>
            <div className={sPageWrapper}>
                <div>{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
