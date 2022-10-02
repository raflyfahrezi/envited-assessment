import create from 'zustand'

import { Event } from '@/models'

import { ZustandState } from './types'

const zustand = create<ZustandState>((set) => ({
    events: [],
    setEvents: (events: Event[]) => set(() => ({ events })),
}))

export default zustand
