import React from 'react'
import { Link } from 'react-router-dom'

import { zustand } from '@/services'
import { Paragraph } from '@/typography'
import { Card, Button, Wrapper } from '@/components'
import LandingPageImage from '@/assets/images/landingpage.png'

import {
    sHome,
    sHomeImage,
    sHomeActive,
    sHomeContent,
    sHomeContentText,
    sHomeContentTitle,
    sHomeContentTitleSpan,
} from './styles'

const HomeModule = () => {
    const zustandState = {
        events: zustand((state) => state.events),
    }

    return (
        <Wrapper>
            <div className={sHome}>
                <div>
                    <img src={LandingPageImage} className={sHomeImage} alt='' />
                </div>
                <div className={sHomeContent}>
                    <div className={sHomeContentText}>
                        <Paragraph weight='bold' className={sHomeContentTitle}>
                            Imagine if <br />
                            <span className={sHomeContentTitleSpan}>
                                Snapchat
                            </span>
                            <br /> had events.
                        </Paragraph>
                        <Paragraph>
                            Easily host and share events with your friends
                            across any social media.
                        </Paragraph>
                    </div>
                    <Link to='/create'>
                        <Button>
                            🎉 <b>Create my event</b>
                        </Button>
                    </Link>
                    <div className={sHomeActive}>
                        {zustandState.events.map((event) => {
                            return <Card key={event.id} {...event} />
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeModule
