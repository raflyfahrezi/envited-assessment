/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { Event } from '@/models'
import { zustand } from '@/services'
import { Paragraph } from '@/typography'
import { Input, Button, Wrapper } from '@/components'

import { sCreate, sCreateTitle, sCreateInput } from './styles'

const CreateModule = () => {
    const navigate = useNavigate()

    const zustandState = {
        events: zustand((state) => state.events),
        setEvents: zustand((state) => state.setEvents),
    }

    const [event, setEvent] = useState<Event>({
        id: 0,
        name: '',
        startDate: '',
        endDate: '',
        hostName: '',
        location: '',
        photoURL: '',
    })

    const formOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setEvent({
            ...event,
            [name]: value,
        })
    }

    const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { id } = event
        const { events, setEvents } = zustandState

        setEvents([...events, event])

        navigate(`/event/${id}`)
    }

    useEffect(() => {
        setEvent({
            ...event,
            id: new Date().getTime(),
        })
    }, [])

    return (
        <Wrapper>
            <form onSubmit={formOnSubmit} className={sCreate}>
                <Paragraph className={sCreateTitle} weight='bold'>
                    Let's create an event
                </Paragraph>
                <div className={sCreateInput}>
                    <div>
                        <Paragraph>Name:</Paragraph>
                        <Input
                            type='text'
                            name='name'
                            value={event.name}
                            onChange={formOnChange}
                        />
                    </div>
                    <div>
                        <Paragraph>Host Name:</Paragraph>
                        <Input
                            type='text'
                            name='hostName'
                            value={event.hostName}
                            onChange={formOnChange}
                        />
                    </div>
                    <div>
                        <Paragraph>Start Date:</Paragraph>
                        <Input
                            type='date'
                            name='startDate'
                            value={event.startDate}
                            onChange={formOnChange}
                        />
                    </div>
                    <div>
                        <Paragraph>End Date:</Paragraph>
                        <Input
                            type='date'
                            name='endDate'
                            value={event.endDate}
                            onChange={formOnChange}
                        />
                    </div>
                    <div>
                        <Paragraph>Location:</Paragraph>
                        <Input
                            type='text'
                            name='location'
                            value={event.location}
                            onChange={formOnChange}
                        />
                    </div>
                    <div>
                        <Paragraph>Photo URL:</Paragraph>
                        <Input
                            type='text'
                            name='photoURL'
                            value={event.photoURL}
                            onChange={formOnChange}
                        />
                    </div>
                </div>
                <Button type='submit'>🎉 Create event</Button>
            </form>
        </Wrapper>
    )
}

export default CreateModule
