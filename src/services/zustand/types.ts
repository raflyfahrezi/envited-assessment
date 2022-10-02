import { Event } from '@/models'

export type ZustandState = {
    events: Event[]
    setEvents: (events: Event[]) => void
}
