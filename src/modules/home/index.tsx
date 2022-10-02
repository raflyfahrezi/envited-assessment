import React from 'react'

import { Paragraph } from '@/typography'
import { Button, Wrapper } from '@/components'
import LandingPageImage from '@/assets/images/landingpage.png'

import {
    sHome,
    sHomeImage,
    sHomeContent,
    sHomeContentText,
    sHomeContentTitle,
    sHomeContentTitleSpan,
} from './styles'

const HomeModule = () => {
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
                    <Button>
                        🎉 <b>Create my event</b>
                    </Button>
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeModule
