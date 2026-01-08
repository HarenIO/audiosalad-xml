import { ParticipantRole } from './ParticipantRole.enum';
import { ProprietaryID } from './ProprietaryID';
import { AudioSaladXML } from './AudioSaladXML';
/**
 * Describes a participant who has been involved in a recording or a release. Maps to
 * `participant_type`
 */
export declare class Participant {
    /**
     * The participant's role in the recording or release. Provided as an enum to ensure
     * validation matches a role in AudioSalad; maps to `role`
     */
    role: ParticipantRole;
    /**
     * Optional sub-role for vendor's use, e.g. Executive Producer; maps to `role_type`
     */
    roleType?: string;
    /**
     * Generally for use with the Performer role, e.g. Drums, Guitar, Programming; maps to
     * `instrument`
     */
    instrument?: string;
    /**
     * The full name of the person; maps to `name`
     */
    name: string;
    /**
     * True for primary participant in a given role; maps to `primary`
     */
    primary: boolean;
    /**
     * Third-party proprietary IDs for this participant; maps to `artist_id`
     */
    artistID?: Array<ProprietaryID>;
    /**
     * Constructor for `Participant` objects. Takes all of the attributes as an object.
     * @param participant - An object containing all fields for the Participant.
     */
    constructor(participant: Partial<Participant>);
    /**
     * Generates AudioSalad XML for the participant.
     * @returns AudioSalad XML `<participant>` element
     */
    xml(): AudioSaladXML;
}
