import { EqualizerBand } from "../";

export const nightcoreData = {
    timescale: {
        speed: 1.2999999523162842,
        pitch: 1.2999999523162842,
        rate: 1,
    }
};

export const daycoreData = {
    timescale: {
        speed: 0.855,
        pitch: 0.855,
        rate: 1,
    }
};

export const vaporwaveData = {
    equalizer: [
        {band: 1, gain: 0.3},
        {band: 0, gain: 0.3},
    ],
    timescale: {pitch: 0.5},
    tremolo: {depth: 0.3, frequency: 14}
};

export const bassboostData = {
    equalizer: [
        {band: 0, gain: 0.6},
        {band: 1, gain: 0.67},
        {band: 2, gain: 0.67},
        {band: 3, gain: 0},
        {band: 4, gain: -0.5},
        {band: 5, gain: 0.15},
        {band: 6, gain: -0.45},
        {band: 7, gain: 0.23},
        {band: 8, gain: 0.35},
        {band: 9, gain: 0.45},
        {band: 10, gain: 0.55},
        {band: 11, gain: 0.6},
        {band: 12, gain: 0.55},
        {band: 13, gain: 0},
    ]
};

export const popData = {
    equalizer: [
        {band: 0, gain: 0.65},
        {band: 1, gain: 0.45},
        {band: 2, gain: -0.45},
        {band: 3, gain: -0.65},
        {band: 4, gain: -0.35},
        {band: 5, gain: 0.45},
        {band: 6, gain: 0.55},
        {band: 7, gain: 0.6},
        {band: 8, gain: 0.6},
        {band: 9, gain: 0.6},
        {band: 10, gain: 0},
        {band: 11, gain: 0},
        {band: 12, gain: 0},
        {band: 13, gain: 0},
    ]
};

export const softData = {
    lowPass: {
        smoothing: 20.0
    }
};

export const treblebassData = {
    equalizer: [
        {band: 0, gain: 0.6},
        {band: 1, gain: 0.67},
        {band: 2, gain: 0.67},
        {band: 3, gain: 0},
        {band: 4, gain: -0.5},
        {band: 5, gain: 0.15},
        {band: 6, gain: -0.45},
        {band: 7, gain: 0.23},
        {band: 8, gain: 0.35},
        {band: 9, gain: 0.45},
        {band: 10, gain: 0.55},
        {band: 11, gain: 0.6},
        {band: 12, gain: 0.55},
        {band: 13, gain: 0},
    ]
};

export const eightDData = {
    rotation: {
        rotationHz: 0.2
    }
};

export const karaokeData = {
    karaoke: {
        level: 1.0,
        monoLevel: 1.0,
        filterBand: 220.0,
        filterWidth: 100.0
    }
};

export const vibratoData = {
    vibrato: {
        frequency: 10,
        depth: 0.9
    }
};

export const tremoloData = {
    tremolo: {
        frequency: 10,
        depth: 0.5
    }
};

export interface Filter {
    equalizer?: Array<EqualizerBand>,
    karaoke?: {
        level?: number,
        monoLevel?: number,
        filterBand?: number,
        filterWidth?: number
    },
    timescale?: {
        speed?: number, // 0 ≤ x
        pitch?: number, // 0 ≤ x
        rate?: number   // 0 ≤ x
    },
    tremolo?: {
        frequency?: number, // 0 < x
        depth?: number      // 0 < x ≤ 1
    },
    vibrato?: {
        frequency?: number, // 0 < x ≤ 14
        depth?: number      // 0 < x ≤ 1
    },
    rotation?: {
        rotationHz?: number // The frequency of the audio rotating around the listener in Hz. 0.2 is similar to the example video above.
    },
    distortion?: {
        sinOffset?: number,
        sinScale?: number,
        cosOffset?: number,
        cosScale?: number,
        tanOffset?: number,
        tanScale?: number,
        offset?: number,
        scale?: number
    },
    channelMix?: {
        leftToLeft?: number,
        leftToRight?: number,
        rightToLeft?: number,
        rightToRight?: number,
    },
    lowPass?: {
        smoothing?: number
    }
};

export const filtersKeys = {
    nightcore: nightcoreData,
    daycore: daycoreData,
    vaporwave: vaporwaveData,
    bassboost: bassboostData,
    pop: popData,
    soft: softData,
    treblebass: treblebassData,
    eightD: eightDData,
    karaoke: karaokeData,
    vibrato: vibratoData,
    tremolo: tremoloData
};

export type filters = 'nightcore' | 'vaporwave' | 'bassboost' | 'pop' | 'soft' | 'treblebass' | 'eightD' | 'karaoke' | 'vibrato' | 'tremolo' | 'daycore' | string;