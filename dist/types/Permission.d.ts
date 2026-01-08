import { CountryCode } from './Country.enum';
import { AudioSaladXML } from './AudioSaladXML';
/**
 * A date and region-bounded distribution permissions; maps to `permission_type`
 */
export declare class Permission {
    /**
     * The permissions type. See AudioSalad documentation for possible types; maps to `type`
     */
    type: 'preorder' | 'stream' | 'download' | 'subscription' | 'track_sale' | string;
    /**
     * Boolean flag defining whether the permissions is granted or not; maps to `enabled`
     */
    enabled: boolean;
    /**
     * The start of the date range for which this permissions applies. Provide a Date object;
     * maps to `start_date`
     */
    startDate?: Date;
    /**
     * The end of the date range for which this permissions applies. Provide a Date object;
     * maps to `end_date`
     */
    endDate?: Date;
    /**
     * A 2-character ISO country code indicating the regions where this applies. Use the
     * CountryCode enum for an easy, validated option; maps to `country_code`
     */
    countryCode?: Array<CountryCode | string>;
    /**
     * Constructor for `Permission` objects. Takes all of the attributes as an object.
     * @param permission - An object containing all fields for the Permission.
     */
    constructor(permission: Partial<Permission>);
    /**
     * Generates AudioSalad XML for the permissions.
     * @returns AudioSalad XML `<permissions>` element
     */
    xml(): AudioSaladXML;
}
