import { css } from '@emotion/css'

import { color } from '@/styles'

export const sCreate = css`
    width: 100%;
    max-width: 700px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    padding-top: 40px;
`

export const sCreateTitle = css`
    font-size: 64px;

    line-height: 64px;

    text-align: center;

    color: ${color.primary['240D57']};
`

export const sCreateInput = css`
    width: 100%;

    display: flex;
    gap: 20px;
    flex-direction: column;
`
