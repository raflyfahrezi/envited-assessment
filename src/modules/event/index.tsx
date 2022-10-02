import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { Event } from '@/models'
import { zustand } from '@/services'
import { Button, Wrapper } from '@/components'
import { Paragraph } from '@/typography'
import { CalendarIcon, LocationIcon } from '@/assets'

import {
    sEvent,
    sEventImage,
    sEventContent,
    sEventContentTitle,
    sEventContentDetail,
    sEventContentDetailItem,
    sEventContentIconWrapper,
} from './styles'

const EventModule = () => {
    const { id } = useParams()

    const [event, setEvent] = useState<Event>()

    const zustandState = {
        events: zustand((state) => state.events),
    }

    const formatDate = (date: string) => {
        return moment(date).format('DD MMMM YYYY')
    }

    useEffect(() => {
        const { events } = zustandState

        const event = events.find((event) => event.id.toString() === id)

        setEvent(event)
    }, [])

    return (
        <Wrapper>
            {event && (
                <div className={sEvent}>
                    <div className={sEventContent}>
                        <div>
                            <Paragraph className={sEventContentTitle}>
                                {event.name}
                            </Paragraph>
                            <Paragraph>
                                Hosted by <b>{event.hostName}</b>
                            </Paragraph>
                        </div>
                        <div className={sEventContentDetail}>
                            <div className={sEventContentDetailItem}>
                                <div className={sEventContentIconWrapper}>
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <Paragraph weight='bold'>When?</Paragraph>
                                    <Paragraph>
                                        {formatDate(event.startDate)} to{' '}
                                        {formatDate(event.endDate)}
                                    </Paragraph>
                                </div>
                            </div>
                            <div className={sEventContentDetailItem}>
                                <div className={sEventContentIconWrapper}>
                                    <LocationIcon />
                                </div>
                                <div>
                                    <Paragraph weight='bold'>Where?</Paragraph>
                                    <Paragraph>{event.location}</Paragraph>
                                </div>
                            </div>
                        </div>
                        <Link to='/'>
                            <Button type='button'>
                                <b>Back to Home</b>
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <img
                            src={event.photoURL}
                            className={sEventImage}
                            alt=''
                        />
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default EventModule
