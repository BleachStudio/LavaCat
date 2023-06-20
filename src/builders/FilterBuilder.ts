import { Filter } from "../data/filters";

export class FilterBuilder {
    public name: string = 'CUSTOM';
    public data: Filter = {};

    constructor(options?: Filter) {
        if (options) {
            this.data = options
        }
    };

    /**
     * setName
     */
    public setName(name: string) {
        this.name = name;

        return this;
    };

    /**
     * setEQ
     */
    public setEQ(options: Filter['equalizer']) {
        this.data['equalizer'] = options;

        return this;
    };

    /**
     * setKaraoke
     */
    public setKaraoke(options: Filter['karaoke']) {
        this.data['karaoke'] = options;

        return this;
    };

    /**
     * setTimescale
     */
    public setTimescale(options: Filter['timescale']) {
        this.data['timescale'] = options;

        return this;
    };

    /**
     * setTremolo
     */
    public setTremolo(options: Filter['tremolo']) {
        this.data['tremolo'] = options;

        return this;
    };

    /**
     * setVibrato
     */
    public setVibrato(options: Filter['vibrato']) {
        this.data['vibrato'] = options;

        return this;
    };

    /**
     * setRotation
     */
    public setRotation(options: Filter['rotation']) {
        this.data['rotation'] = options;

        return this;
    };

    /**
     * setDistortion
     */
    public setDistortion(options: Filter['distortion']) {
        this.data['distortion'] = options;

        return this;
    };

    /**
     * setChannelMix
     */
    public setChannelMix(options: Filter['channelMix']) {
        this.data['channelMix'] = options;

        return this;
    };

    /**
     * setLowPass
     */
    public setLowPass(options: Filter['lowPass']) {
        this.data['lowPass'] = options;

        return this;
    };
};