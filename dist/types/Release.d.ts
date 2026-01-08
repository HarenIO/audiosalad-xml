import { Participant } from './Participant';
import { ReleaseFormat } from './ReleaseFormat.enum';
import { CountryCode } from './Country.enum';
import { GenreType } from './GenreType';
import { Label } from './Label';
import { PriceTier } from './PriceTier';
import { Permission } from './Permission';
import { Territory } from './Territory';
import { Asset } from './Asset';
import { Track } from './Track';
import { Action } from './Action.enum';
import { Delivery } from './Delivery';
import { Attr } from './Attr';
import { AudioSaladXML } from './AudioSaladXML';
import { Text } from './Text';
export declare class Release {
    /**
     * Usually the vendor name; maps to `distributor_name`
     * */
    distributorName?: string;
    /**
     * Any proprietary data export identifier for the data extract as used by the data provider.
     * Appears only for information purposes within AudioSalad; maps to `export_id`
     * */
    exportID?: string;
    /**
     * Export time as Date object; maps to `export_time`
     */
    exportTime?: Date;
    /**
     * AudioSalad data operation for the file; maps to `action`
     */
    action: Action;
    /**
     * The UPC/EAN barcode for this release. Must be provided as a string (to account for
     * leading zeros and similar number formatting that would be lost as a JS number); maps to
     * `upc_ean`
     */
    upc?: string;
    /**
     * Proprietary release identifier as used by the vendor. Appears only for information
     * purposes within AudioSalad; maps to `vendor_release_id`
     */
    vendorReleaseID?: string;
    /**
     * AudioSalad release identifier; maps to `global_release_id`
     */
    globalReleaseID?: string;
    /**
     * Catalog number for this release; maps to `catalog_id`
     */
    catalogID?: string;
    /**
     * Number of this releases within a multi-part or multi-volume series; maps to `series`
     */
    series?: string;
    /**
     * Album/release title, minus any title version; maps to `title`
     */
    title: string;
    /**
     * Title version, e.g. Remixes; maps to `title_version`
     */
    titleVersion?: string;
    /**
     * Parental advisory status of the release; maps to `advisory`
     */
    advisory?: 'none' | 'clean' | 'explicit';
    /**
     * Language of the release and track titles, versions, etc. Should be a capitalized language
     * name, e.g. `English` or `French`; maps to `metadata_language`
     */
    metadataLanguage?: string;
    /**
     * Language of the vocals for the release; can also be overridden at the track level if
     * applicable.. Should be a capitalized language name, e.g. `English` or `French`; maps to
     * `audio_language`
     */
    audioLanguage?: string;
    /**
     * Artist's name as it appears on the release; maps to `display_artist`
     */
    displayArtist: string;
    /**
     * Array of participants (people who have been involved with a recording or release, e.g.
     * musicians, vocalists, producers, engineers, etc.). Use the `Participant` interface to
     * ensure valid data is provided; maps to `participant`
     */
    participants?: Array<Participant>;
    /**
     *  Flag for indicating whether the release is a compilation; maps to `compilation`
     */
    compilation?: boolean;
    /**
     * Original release date of the title. If the release isn't a re-release, this should be
     * the same as the `releaseDate` (or can be omitted for the same effect). Provide as a Date
     * object, and this library will convert it to the `partial_date` XML type that AudioSalad
     * specifies; maps to `original_release_date`
     */
    originalReleaseDate?: Date;
    /**
     * The release date, as a Date object; maps to `release_date`
     */
    releaseDate?: Date;
    /**
     * The release format. Use the `ReleaseFormat` enum to easily select a validated option, or
     * provide a string (must match capitalization options provided by AudioSalad's XSD); maps
     * to `release_format`
     */
    releaseFormat?: ReleaseFormat | string;
    /**
     * The recording country as an ISO two letter code. Use the `CountryCode` enum to easily
     * provide a valid code based on the full country name, or provide the code yourself as a
     * string; maps to `recording_location`
     */
    recordingLocation?: CountryCode | string;
    /**
     * URL of the band website, or smart URL of the release; maps to `url`
     */
    url?: string;
    /**
     * An array of genres for the release. Use the `GenreType` interface to ensure valid data is
     * provided; maps to `genre`
     */
    genres?: Array<GenreType>;
    /**
     * An array of tags that can be used for custom organization, e.g. mood/theme; maps to `tag`
     */
    tags?: Array<string>;
    /**
     * Any notes (only shown in AudioSalad/internally); maps to `notes`
     */
    notes?: string;
    /**
     * An array of `Text` interfaces, which map to any specific text items for the release. For
     * releases, this will usually be used to provide descriptions, reviews, and liner notes.
     * Use the `Text` interface, and see its docs for more details; maps to `text`
     */
    texts?: Array<Text>;
    /**
     * The owner of the copyright for the release (often the label name), as it appears on the
     * product copyright legend; maps to `c_info`
     */
    cInfo?: string;
    /**
     * The copyright year, as it appears on the product copyright legend; maps to `c_year`
     */
    cYear?: number;
    /**
     * The owner of the phonographic copyright for the release (often the label name), as it
     * appears on the product phonographic copyright legend; maps to `p_info`
     */
    pInfo?: string;
    /**
     * The phonographic copyright year, as it appears on the product phonographic copyright
     * legend; maps to `p_year`
     */
    pYear?: number;
    /**
     * The full name of the musical rights holder, often the name of the record label; maps to
     * `rights_holders`
     */
    rightsHolders?: string;
    /**
     * A `Label` interface giving details about the record label; maps to `label`
     */
    label?: Label;
    /**
     * An array of price tiers conveying the pricing levels for the release. Use the `PriceTier`
     * interface to ensure the input is valid; maps to `price_tier`
     */
    priceTiers?: Array<PriceTier>;
    /**
     * An array of `Permission` objects conveying when and where the release has been license
     * for specific permissions. Use the `Permission` interface; maps to `permissions`
     */
    permissions?: Array<Permission>;
    /**
     * The global release date with time, for a timed global release. Provide a Date object WITH
     * A SPECIFIC TIME in UTC; maps to `global_release_date`
     */
    globalReleaseDate?: Date;
    /**
     * An array of territories conveying specifics for any given territories. Use the
     * `Territory` interface for validating input; maps to `territory`
     */
    territories?: Array<Territory>;
    /**
     * An array of release-related assets for images, music videos, documentation, etc. Use the
     * `Asset` interface to ensure valid input; maps to `asset`
     */
    assets?: Array<Asset>;
    /**
     * An array of tracks associated with the release. Use the `Track` interface; maps to `track`
     */
    tracks: Array<Track>;
    /**
     * Optional DSP-specific delivery directives for the release; maps to `dsp_delivery`
     */
    dspDeliveries?: Array<Delivery>;
    /**
     * Any custom attributes for the release. Provide any JS object and this library will
     * automatically map this to AudioSalad's `attr_type`, including inferring typing from your
     * provided variables.
     */
    attr?: Array<Attr>;
    /**
     * Constructor for Releases. Takes all of the release attributes as an object.
     * @param release - An object containing all fields for the Release.
     */
    constructor(release: Partial<Release>);
    /**
     * Generates AudioSalad XML for the release.
     * @returns AudioSalad XML `<release>` element
     */
    xml(): AudioSaladXML;
    /**
     * Generates a sample `Release` object that can be used for testing.
     */
    static sample(): Release;
}
