import React from 'react'
import { Global as GlobalProvider, css } from '@emotion/react'

const sGlobal = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Open Sans';
    }

    body {
        background: linear-gradient(0deg, #f6f2ff, #f6f2ff), #fbfaff;
    }
`

const Global = () => {
    return <GlobalProvider styles={sGlobal} />
}

export default Global
