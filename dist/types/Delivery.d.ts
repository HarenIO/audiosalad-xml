import { Action } from './Action.enum';
import { AudioSaladXML } from './AudioSaladXML';
/**
 * Defines a delivery to a set of DSPs; maps to `dsp_delivery_type`
 */
export declare class Delivery {
    /**
     * DSP identifiers for which to target this delivery; maps to `dsp`
     */
    dsps: Array<string>;
    /**
     * Delivery action/operation. Use `Action` enum; maps to `action`
     */
    action: Action;
    /**
     * Scheduled delivery date; omit for ASAP. Provide a Date object; maps to `delivery_date`
     */
    deliveryDate?: Date;
    /**
     * Constructor for Deliveries. Takes all of the release attributes as an object.
     * @param delivery - An object containing all fields for the Delivery.
     */
    constructor(delivery: Partial<Delivery>);
    /**
     * Generates AudioSalad XML for the delivery.
     * @returns AudioSalad XML `<dsp_delivery>` element
     */
    xml(): AudioSaladXML;
}
