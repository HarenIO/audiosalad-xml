import { iTunesPriceTier } from './PriceTier.enum';
import { AudioSaladXML } from './AudioSaladXML';
/**
 * A pricing tier identifier as applies to a download platform; maps to `price_tier_type`
 */
export declare class PriceTier {
    /**
     * The platform for which this tier applies, e.g. iTunes, Generic; maps to `type`
     */
    type: 'iTunes' | 'Generic' | string;
    /**
     * The price tier identifier. Use the iTunesPriceTier enum for easy access to valid iTunes
     * price tiers. This also accepts strings for generic or new iTunes tiers.
     */
    name: iTunesPriceTier | string;
    /**
     * Constructor for `PriceTier` objects. Takes all of the attributes as an object.
     * @param priceTier - An object containing all fields for the PriceTier.
     */
    constructor(priceTier: Partial<PriceTier>);
    /**
     * Generates AudioSalad XML for the price tier.
     * @returns AudioSalad XML `<price_tier>` element
     */
    xml(): AudioSaladXML;
}
