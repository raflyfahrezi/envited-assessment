export interface ColorPrimary {
    '240D57': string
    '501FC1': string
    '8456EC': string
    E87BF8: string
}

export interface ColorSecondary {
    CCB6FF: string
    EDE5FF: string
    F6F2FF: string
}

export interface ColorAlert {
    FFD7E0: string
    E61445: string
    D3FFE2: string
    '00805E': string
}

export interface ColorNeutrals {
    '4F4F4F': string
    '828282': string
    BDBDBD: string
    E0E0E0: string
    F2F2F2: string
}

export interface Color {
    primary: ColorPrimary
    secondary: ColorSecondary
    alert: ColorAlert
    neutrals: ColorNeutrals
}
