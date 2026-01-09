import { AudioSaladXML } from './AudioSaladXML';
/**
 * Represents a proprietary participant ID, e.g. for Spotify or Apple artist IDs.
 */
export declare class ProprietaryID {
    /**
     * What type of identifier this is, e.g. spotify; maps to `type`
     */
    type: string;
    /**
     * The identifier; maps to `id`
     */
    id: string;
    /**
     * Constructor for `ProprietaryID` objects. Takes all of the attributes as an object.
     * @param proprietaryID - An object containing all fields for the ProprietaryID.
     */
    constructor(proprietaryID: Partial<ProprietaryID>);
    /**
     * Generates AudioSalad XML for the ID.
     * @returns AudioSalad XML `<artist_id>` element
     */
    xml(): AudioSaladXML;
}
