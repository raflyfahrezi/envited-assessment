import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { Paragraph } from '@/typography'

import { CardProps } from './types'
import { sCard, sCardText } from './styles'

const Card = ({ id, name, startDate, endDate }: CardProps) => {
    const formatDate = (date: string) => {
        return moment(date).format('DD MMMM YYYY')
    }

    return (
        <div className={sCard}>
            <Link to={`/event/${id}`} className={sCardText}>
                <Paragraph className={sCardText} weight='bold'>
                    {name}
                </Paragraph>
                <Paragraph className={sCardText}>
                    {formatDate(startDate)} to {formatDate(endDate)}
                </Paragraph>
            </Link>
        </div>
    )
}

export default Card
