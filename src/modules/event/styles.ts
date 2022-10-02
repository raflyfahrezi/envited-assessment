import { css } from '@emotion/css'

import { color } from '@/styles'

export const sEvent = css`
    width: 100%;

    padding-top: 40px;

    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`

export const sEventImage = css`
    /* width: 100%; */
    width: 300px;
    height: 300px;
    object-fit: cover;
`

export const sEventContent = css`
    width: 100%;

    display: flex;
    gap: 40px;
    flex-direction: column;
`

export const sEventContentTitle = css`
    font-size: 64px;

    line-height: 100px;

    color: ${color.primary['240D57']};
`

export const sEventContentIconWrapper = css`
    width: 100%;
    max-width: 30px;
`

export const sEventContentDetail = css`
    display: flex;
    gap: 30px;
    flex-direction: column;
`

export const sEventContentDetailItem = css`
    display: flex;
    gap: 30px;
    align-items: center;
`
