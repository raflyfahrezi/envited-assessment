import { css } from '@emotion/css'

import { color } from '@/styles'

export const sHome = css`
    width: 100%;

    padding-top: 40px;

    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
`

export const sHomeContent = css`
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: flex-end;

    text-align: right;
`

export const sHomeContentText = css`
    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const sHomeContentTitle = css`
    font-size: 64px;

    line-height: 64px;

    color: ${color.primary['240D57']};
`

export const sHomeContentTitleSpan = css`
    color: #8456ec;
`

export const sHomeImage = css`
    width: 100%;
    max-width: 400px;
`
