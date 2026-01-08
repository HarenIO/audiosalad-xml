'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var xmlEscape = _interopDefault(require('xml-escape'));
var format = _interopDefault(require('xml-formatter'));

/**
 * Participant's role in the recording or release.
 */

(function (ParticipantRole) {
  ParticipantRole["MainArtist"] = "Main Artist";
  ParticipantRole["FeaturedArtist"] = "Featured Artist";
  ParticipantRole["Vocalist"] = "Vocalist";
  ParticipantRole["Producer"] = "Producer";
  ParticipantRole["Remixer"] = "Remixer";
  ParticipantRole["Mixer"] = "Mixer";
  ParticipantRole["Composer"] = "Composer";
  ParticipantRole["Conductor"] = "Conductor";
  ParticipantRole["Soloist"] = "Soloist";
  ParticipantRole["Performer"] = "Performer";
  ParticipantRole["Arranger"] = "Arranger";
  ParticipantRole["SongWriter"] = "Song Writer";
  ParticipantRole["Engineer"] = "Engineer";
  ParticipantRole["MasteringEngineer"] = "Mastering Engineer";
  ParticipantRole["Choir"] = "Choir";
  ParticipantRole["Orchestra"] = "Orchestra";
  ParticipantRole["Ensemble"] = "Ensemble";
  ParticipantRole["Lyricist"] = "Lyricist";
  ParticipantRole["Publicist"] = "Publicist";
  ParticipantRole["Other"] = "Other";
})(exports.ParticipantRole || (exports.ParticipantRole = {}));

var formatXml = function formatXml(xml) {
  return format(xml, {
    collapseContent: true,
    indentation: '    '
  });
};

/**
 * Describes a participant who has been involved in a recording or a release. Maps to
 * `participant_type`
 */

var Participant = /*#__PURE__*/function () {
  /**
   * Constructor for `Participant` objects. Takes all of the attributes as an object.
   * @param participant - An object containing all fields for the Participant.
   */
  function Participant(participant) {
    /**
     * The participant's role in the recording or release. Provided as an enum to ensure
     * validation matches a role in AudioSalad; maps to `role`
     */
    this.role = exports.ParticipantRole.Other;
    /**
     * The full name of the person; maps to `name`
     */

    this.name = '';
    /**
     * True for primary participant in a given role; maps to `primary`
     */

    this.primary = false;
    Object.assign(this, participant);
  }
  /**
   * Generates AudioSalad XML for the participant.
   * @returns AudioSalad XML `<participant>` element
   */


  var _proto = Participant.prototype;

  _proto.xml = function xml() {
    var _this$artistID$map$jo, _this$artistID;

    return formatXml("\n            <participant>\n                <role>" + xmlEscape(this.role) + "</role>\n                " + (this.roleType ? "<role_type>" + xmlEscape(this.roleType) + "</role_type>" : '') + "\n                " + (this.instrument ? "<instrument>" + xmlEscape(this.instrument) + "</instrument>" : '') + "\n                <name>" + xmlEscape(this.name).trim() + "</name>\n                <primary>" + this.primary + "</primary>\n                " + ((_this$artistID$map$jo = (_this$artistID = this.artistID) == null ? void 0 : _this$artistID.map(function (id) {
      return id.xml();
    }).join('')) != null ? _this$artistID$map$jo : '') + "\n            </participant>\n        ");
  };

  return Participant;
}();

(function (ReleaseFormat) {
  ReleaseFormat["Digital"] = "digital";
  ReleaseFormat["Single"] = "single";
  ReleaseFormat["EP"] = "ep";
  ReleaseFormat["Album"] = "album";
  ReleaseFormat["DoubleAlbum"] = "double album";
  ReleaseFormat["BoxSet"] = "box set";
  ReleaseFormat["LivePerformance"] = "live performance";
  ReleaseFormat["ClassicAlbum"] = "classical album";
  ReleaseFormat["Video"] = "video";
})(exports.ReleaseFormat || (exports.ReleaseFormat = {}));

(function (CountryCode) {
  CountryCode["Worldwide"] = "WW";
  CountryCode["Afghanistan"] = "AF";
  CountryCode["AlandIslands"] = "AX";
  CountryCode["Albania"] = "AL";
  CountryCode["Algeria"] = "DZ";
  CountryCode["AmericanSamoa"] = "AS";
  CountryCode["Andorra"] = "AD";
  CountryCode["Angola"] = "AO";
  CountryCode["Anguilla"] = "AI";
  CountryCode["Antarctica"] = "AQ";
  CountryCode["AntiguaAndBarbuda"] = "AG";
  CountryCode["Argentina"] = "AR";
  CountryCode["Armenia"] = "AM";
  CountryCode["Aruba"] = "AW";
  CountryCode["Australia"] = "AU";
  CountryCode["Austria"] = "AT";
  CountryCode["Azerbaijan"] = "AZ";
  CountryCode["Bahamas"] = "BS";
  CountryCode["Bahrain"] = "BH";
  CountryCode["Bangladesh"] = "BD";
  CountryCode["Barbados"] = "BB";
  CountryCode["Belarus"] = "BY";
  CountryCode["Belgium"] = "BE";
  CountryCode["Belize"] = "BZ";
  CountryCode["Benin"] = "BJ";
  CountryCode["Bermuda"] = "BM";
  CountryCode["Bhutan"] = "BT";
  CountryCode["Bolivia"] = "BO";
  CountryCode["BonaireSintEustatiusSaba"] = "BQ";
  CountryCode["BosniaAndHerzegovina"] = "BA";
  CountryCode["Botswana"] = "BW";
  CountryCode["BouvetIsland"] = "BV";
  CountryCode["Brazil"] = "BR";
  CountryCode["BritishIndianOceanTerritory"] = "IO";
  CountryCode["BruneiDarussalam"] = "BN";
  CountryCode["Bulgaria"] = "BG";
  CountryCode["BurkinaFaso"] = "BF";
  CountryCode["Burundi"] = "BI";
  CountryCode["Cambodia"] = "KH";
  CountryCode["Cameroon"] = "CM";
  CountryCode["Canada"] = "CA";
  CountryCode["CapeVerde"] = "CV";
  CountryCode["CaymanIslands"] = "KY";
  CountryCode["CentralAfricanRepublic"] = "CF";
  CountryCode["Chad"] = "TD";
  CountryCode["Chile"] = "CL";
  CountryCode["China"] = "CN";
  CountryCode["ChristmasIsland"] = "CX";
  CountryCode["CocosKeelingIslands"] = "CC";
  CountryCode["Colombia"] = "CO";
  CountryCode["Comoros"] = "KM";
  CountryCode["Congo"] = "CG";
  CountryCode["CongoDemocraticRepublic"] = "CD";
  CountryCode["CookIslands"] = "CK";
  CountryCode["CostaRica"] = "CR";
  CountryCode["CoteDIvoire"] = "CI";
  CountryCode["Croatia"] = "HR";
  CountryCode["Cuba"] = "CU";
  CountryCode["Cura\xE7ao"] = "CW";
  CountryCode["Cyprus"] = "CY";
  CountryCode["CzechRepublic"] = "CZ";
  CountryCode["Denmark"] = "DK";
  CountryCode["Djibouti"] = "DJ";
  CountryCode["Dominica"] = "DM";
  CountryCode["DominicanRepublic"] = "DO";
  CountryCode["Ecuador"] = "EC";
  CountryCode["Egypt"] = "EG";
  CountryCode["ElSalvador"] = "SV";
  CountryCode["EquatorialGuinea"] = "GQ";
  CountryCode["Eritrea"] = "ER";
  CountryCode["Estonia"] = "EE";
  CountryCode["Ethiopia"] = "ET";
  CountryCode["FalklandIslands"] = "FK";
  CountryCode["FaroeIslands"] = "FO";
  CountryCode["Fiji"] = "FJ";
  CountryCode["Finland"] = "FI";
  CountryCode["France"] = "FR";
  CountryCode["FrenchGuiana"] = "GF";
  CountryCode["FrenchPolynesia"] = "PF";
  CountryCode["FrenchSouthernTerritories"] = "TF";
  CountryCode["Gabon"] = "GA";
  CountryCode["Gambia"] = "GM";
  CountryCode["Georgia"] = "GE";
  CountryCode["Germany"] = "DE";
  CountryCode["Ghana"] = "GH";
  CountryCode["Gibraltar"] = "GI";
  CountryCode["Greece"] = "GR";
  CountryCode["Greenland"] = "GL";
  CountryCode["Grenada"] = "GD";
  CountryCode["Guadeloupe"] = "GP";
  CountryCode["Guam"] = "GU";
  CountryCode["Guatemala"] = "GT";
  CountryCode["Guernsey"] = "GG";
  CountryCode["Guinea"] = "GN";
  CountryCode["GuineaBissau"] = "GW";
  CountryCode["Guyana"] = "GY";
  CountryCode["Haiti"] = "HT";
  CountryCode["HeardIslandMcdonaldIslands"] = "HM";
  CountryCode["HolySeeVaticanCityState"] = "VA";
  CountryCode["Honduras"] = "HN";
  CountryCode["HongKong"] = "HK";
  CountryCode["Hungary"] = "HU";
  CountryCode["Iceland"] = "IS";
  CountryCode["India"] = "IN";
  CountryCode["Indonesia"] = "ID";
  CountryCode["Iran"] = "IR";
  CountryCode["Iraq"] = "IQ";
  CountryCode["Ireland"] = "IE";
  CountryCode["IsleOfMan"] = "IM";
  CountryCode["Israel"] = "IL";
  CountryCode["Italy"] = "IT";
  CountryCode["Jamaica"] = "JM";
  CountryCode["Japan"] = "JP";
  CountryCode["Jersey"] = "JE";
  CountryCode["Jordan"] = "JO";
  CountryCode["Kazakhstan"] = "KZ";
  CountryCode["Kenya"] = "KE";
  CountryCode["Kiribati"] = "KI";
  CountryCode["Korea"] = "KR";
  CountryCode["KoreaDemocraticPeoplesRepublic"] = "KP";
  CountryCode["Kuwait"] = "KW";
  CountryCode["Kyrgyzstan"] = "KG";
  CountryCode["LaoPeoplesDemocraticRepublic"] = "LA";
  CountryCode["Latvia"] = "LV";
  CountryCode["Lebanon"] = "LB";
  CountryCode["Lesotho"] = "LS";
  CountryCode["Liberia"] = "LR";
  CountryCode["LibyanArabJamahiriya"] = "LY";
  CountryCode["Liechtenstein"] = "LI";
  CountryCode["Lithuania"] = "LT";
  CountryCode["Luxembourg"] = "LU";
  CountryCode["Macao"] = "MO";
  CountryCode["Macedonia"] = "MK";
  CountryCode["Madagascar"] = "MG";
  CountryCode["Malawi"] = "MW";
  CountryCode["Malaysia"] = "MY";
  CountryCode["Maldives"] = "MV";
  CountryCode["Mali"] = "ML";
  CountryCode["Malta"] = "MT";
  CountryCode["MarshallIslands"] = "MH";
  CountryCode["Martinique"] = "MQ";
  CountryCode["Mauritania"] = "MR";
  CountryCode["Mauritius"] = "MU";
  CountryCode["Mayotte"] = "YT";
  CountryCode["Mexico"] = "MX";
  CountryCode["Micronesia"] = "FM";
  CountryCode["Moldova"] = "MD";
  CountryCode["Monaco"] = "MC";
  CountryCode["Mongolia"] = "MN";
  CountryCode["Montenegro"] = "ME";
  CountryCode["Montserrat"] = "MS";
  CountryCode["Morocco"] = "MA";
  CountryCode["Mozambique"] = "MZ";
  CountryCode["Myanmar"] = "MM";
  CountryCode["Namibia"] = "NA";
  CountryCode["Nauru"] = "NR";
  CountryCode["Nepal"] = "NP";
  CountryCode["Netherlands"] = "NL";
  CountryCode["NewCaledonia"] = "NC";
  CountryCode["NewZealand"] = "NZ";
  CountryCode["Nicaragua"] = "NI";
  CountryCode["Niger"] = "NE";
  CountryCode["Nigeria"] = "NG";
  CountryCode["Niue"] = "NU";
  CountryCode["NorfolkIsland"] = "NF";
  CountryCode["NorthernMarianaIslands"] = "MP";
  CountryCode["Norway"] = "NO";
  CountryCode["Oman"] = "OM";
  CountryCode["Pakistan"] = "PK";
  CountryCode["Palau"] = "PW";
  CountryCode["PalestinianTerritory"] = "PS";
  CountryCode["Panama"] = "PA";
  CountryCode["PapuaNewGuinea"] = "PG";
  CountryCode["Paraguay"] = "PY";
  CountryCode["Peru"] = "PE";
  CountryCode["Philippines"] = "PH";
  CountryCode["Pitcairn"] = "PN";
  CountryCode["Poland"] = "PL";
  CountryCode["Portugal"] = "PT";
  CountryCode["PuertoRico"] = "PR";
  CountryCode["Qatar"] = "QA";
  CountryCode["Reunion"] = "RE";
  CountryCode["Romania"] = "RO";
  CountryCode["RussianFederation"] = "RU";
  CountryCode["Rwanda"] = "RW";
  CountryCode["SaintBarthelemy"] = "BL";
  CountryCode["SaintHelena"] = "SH";
  CountryCode["SaintKittsAndNevis"] = "KN";
  CountryCode["SaintLucia"] = "LC";
  CountryCode["SaintMartin"] = "MF";
  CountryCode["SaintPierreAndMiquelon"] = "PM";
  CountryCode["SaintVincentAndGrenadines"] = "VC";
  CountryCode["Samoa"] = "WS";
  CountryCode["SanMarino"] = "SM";
  CountryCode["SaoTomeAndPrincipe"] = "ST";
  CountryCode["SaudiArabia"] = "SA";
  CountryCode["Senegal"] = "SN";
  CountryCode["Serbia"] = "RS";
  CountryCode["Seychelles"] = "SC";
  CountryCode["SierraLeone"] = "SL";
  CountryCode["Singapore"] = "SG";
  CountryCode["SintMaarten"] = "SX";
  CountryCode["Slovakia"] = "SK";
  CountryCode["Slovenia"] = "SI";
  CountryCode["SolomonIslands"] = "SB";
  CountryCode["Somalia"] = "SO";
  CountryCode["SouthAfrica"] = "ZA";
  CountryCode["SouthGeorgiaAndSandwichIsl"] = "GS";
  CountryCode["SouthSudan"] = "SS";
  CountryCode["Spain"] = "ES";
  CountryCode["SriLanka"] = "LK";
  CountryCode["Sudan"] = "SD";
  CountryCode["Suriname"] = "SR";
  CountryCode["SvalbardAndJanMayen"] = "SJ";
  CountryCode["Swaziland"] = "SZ";
  CountryCode["Sweden"] = "SE";
  CountryCode["Switzerland"] = "CH";
  CountryCode["SyrianArabRepublic"] = "SY";
  CountryCode["Taiwan"] = "TW";
  CountryCode["Tajikistan"] = "TJ";
  CountryCode["Tanzania"] = "TZ";
  CountryCode["Thailand"] = "TH";
  CountryCode["TimorLeste"] = "TL";
  CountryCode["Togo"] = "TG";
  CountryCode["Tokelau"] = "TK";
  CountryCode["Tonga"] = "TO";
  CountryCode["TrinidadAndTobago"] = "TT";
  CountryCode["Tunisia"] = "TN";
  CountryCode["Turkey"] = "TR";
  CountryCode["Turkmenistan"] = "TM";
  CountryCode["TurksAndCaicosIslands"] = "TC";
  CountryCode["Tuvalu"] = "TV";
  CountryCode["Uganda"] = "UG";
  CountryCode["Ukraine"] = "UA";
  CountryCode["UnitedArabEmirates"] = "AE";
  CountryCode["UnitedKingdom"] = "GB";
  CountryCode["UnitedStates"] = "US";
  CountryCode["UnitedStatesOutlyingIslands"] = "UM";
  CountryCode["Uruguay"] = "UY";
  CountryCode["Uzbekistan"] = "UZ";
  CountryCode["Vanuatu"] = "VU";
  CountryCode["Venezuela"] = "VE";
  CountryCode["Vietnam"] = "VN";
  CountryCode["VirginIslandsBritish"] = "VG";
  CountryCode["VirginIslandsUS"] = "VI";
  CountryCode["WallisAndFutuna"] = "WF";
  CountryCode["WesternSahara"] = "EH";
  CountryCode["Yemen"] = "YE";
  CountryCode["Zambia"] = "ZM";
  CountryCode["Zimbabwe"] = "ZW";
})(exports.CountryCode || (exports.CountryCode = {}));

(function (CountryName) {
  CountryName["Worldwide"] = "Worldwide";
  CountryName["Afghanistan"] = "Afghanistan";
  CountryName["AlandIslands"] = "AlandIslands";
  CountryName["Albania"] = "Albania";
  CountryName["Algeria"] = "Algeria";
  CountryName["AmericanSamoa"] = "AmericanSamoa";
  CountryName["Andorra"] = "Andorra";
  CountryName["Angola"] = "Angola";
  CountryName["Anguilla"] = "Anguilla";
  CountryName["Antarctica"] = "Antarctica";
  CountryName["AntiguaAndBarbuda"] = "AntiguaAndBarbuda";
  CountryName["Argentina"] = "Argentina";
  CountryName["Armenia"] = "Armenia";
  CountryName["Aruba"] = "Aruba";
  CountryName["Australia"] = "Australia";
  CountryName["Austria"] = "Austria";
  CountryName["Azerbaijan"] = "Azerbaijan";
  CountryName["Bahamas"] = "Bahamas";
  CountryName["Bahrain"] = "Bahrain";
  CountryName["Bangladesh"] = "Bangladesh";
  CountryName["Barbados"] = "Barbados";
  CountryName["Belarus"] = "Belarus";
  CountryName["Belgium"] = "Belgium";
  CountryName["Belize"] = "Belize";
  CountryName["Benin"] = "Benin";
  CountryName["Bermuda"] = "Bermuda";
  CountryName["Bhutan"] = "Bhutan";
  CountryName["Bolivia"] = "Bolivia";
  CountryName["BonaireSintEustatiusSaba"] = "BonaireSintEustatiusSaba";
  CountryName["BosniaAndHerzegovina"] = "BosniaAndHerzegovina";
  CountryName["Botswana"] = "Botswana";
  CountryName["BouvetIsland"] = "BouvetIsland";
  CountryName["Brazil"] = "Brazil";
  CountryName["BritishIndianOceanTerritory"] = "BritishIndianOceanTerritory";
  CountryName["BruneiDarussalam"] = "BruneiDarussalam";
  CountryName["Bulgaria"] = "Bulgaria";
  CountryName["BurkinaFaso"] = "BurkinaFaso";
  CountryName["Burundi"] = "Burundi";
  CountryName["Cambodia"] = "Cambodia";
  CountryName["Cameroon"] = "Cameroon";
  CountryName["Canada"] = "Canada";
  CountryName["CapeVerde"] = "CapeVerde";
  CountryName["CaymanIslands"] = "CaymanIslands";
  CountryName["CentralAfricanRepublic"] = "CentralAfricanRepublic";
  CountryName["Chad"] = "Chad";
  CountryName["Chile"] = "Chile";
  CountryName["China"] = "China";
  CountryName["ChristmasIsland"] = "ChristmasIsland";
  CountryName["CocosKeelingIslands"] = "CocosKeelingIslands";
  CountryName["Colombia"] = "Colombia";
  CountryName["Comoros"] = "Comoros";
  CountryName["Congo"] = "Congo";
  CountryName["CongoDemocraticRepublic"] = "CongoDemocraticRepublic";
  CountryName["CookIslands"] = "CookIslands";
  CountryName["CostaRica"] = "CostaRica";
  CountryName["CoteDIvoire"] = "CoteDIvoire";
  CountryName["Croatia"] = "Croatia";
  CountryName["Cuba"] = "Cuba";
  CountryName["Cura\xE7ao"] = "Cura\xE7ao";
  CountryName["Cyprus"] = "Cyprus";
  CountryName["CzechRepublic"] = "CzechRepublic";
  CountryName["Denmark"] = "Denmark";
  CountryName["Djibouti"] = "Djibouti";
  CountryName["Dominica"] = "Dominica";
  CountryName["DominicanRepublic"] = "DominicanRepublic";
  CountryName["Ecuador"] = "Ecuador";
  CountryName["Egypt"] = "Egypt";
  CountryName["ElSalvador"] = "ElSalvador";
  CountryName["EquatorialGuinea"] = "EquatorialGuinea";
  CountryName["Eritrea"] = "Eritrea";
  CountryName["Estonia"] = "Estonia";
  CountryName["Ethiopia"] = "Ethiopia";
  CountryName["FalklandIslands"] = "FalklandIslands";
  CountryName["FaroeIslands"] = "FaroeIslands";
  CountryName["Fiji"] = "Fiji";
  CountryName["Finland"] = "Finland";
  CountryName["France"] = "France";
  CountryName["FrenchGuiana"] = "FrenchGuiana";
  CountryName["FrenchPolynesia"] = "FrenchPolynesia";
  CountryName["FrenchSouthernTerritories"] = "FrenchSouthernTerritories";
  CountryName["Gabon"] = "Gabon";
  CountryName["Gambia"] = "Gambia";
  CountryName["Georgia"] = "Georgia";
  CountryName["Germany"] = "Germany";
  CountryName["Ghana"] = "Ghana";
  CountryName["Gibraltar"] = "Gibraltar";
  CountryName["Greece"] = "Greece";
  CountryName["Greenland"] = "Greenland";
  CountryName["Grenada"] = "Grenada";
  CountryName["Guadeloupe"] = "Guadeloupe";
  CountryName["Guam"] = "Guam";
  CountryName["Guatemala"] = "Guatemala";
  CountryName["Guernsey"] = "Guernsey";
  CountryName["Guinea"] = "Guinea";
  CountryName["GuineaBissau"] = "GuineaBissau";
  CountryName["Guyana"] = "Guyana";
  CountryName["Haiti"] = "Haiti";
  CountryName["HeardIslandMcdonaldIslands"] = "HeardIslandMcdonaldIslands";
  CountryName["HolySeeVaticanCityState"] = "HolySeeVaticanCityState";
  CountryName["Honduras"] = "Honduras";
  CountryName["HongKong"] = "HongKong";
  CountryName["Hungary"] = "Hungary";
  CountryName["Iceland"] = "Iceland";
  CountryName["India"] = "India";
  CountryName["Indonesia"] = "Indonesia";
  CountryName["Iran"] = "Iran";
  CountryName["Iraq"] = "Iraq";
  CountryName["Ireland"] = "Ireland";
  CountryName["IsleOfMan"] = "IsleOfMan";
  CountryName["Israel"] = "Israel";
  CountryName["Italy"] = "Italy";
  CountryName["Jamaica"] = "Jamaica";
  CountryName["Japan"] = "Japan";
  CountryName["Jersey"] = "Jersey";
  CountryName["Jordan"] = "Jordan";
  CountryName["Kazakhstan"] = "Kazakhstan";
  CountryName["Kenya"] = "Kenya";
  CountryName["Kiribati"] = "Kiribati";
  CountryName["Korea"] = "Korea";
  CountryName["KoreaDemocraticPeoplesRepublic"] = "KoreaDemocraticPeoplesRepublic";
  CountryName["Kuwait"] = "Kuwait";
  CountryName["Kyrgyzstan"] = "Kyrgyzstan";
  CountryName["LaoPeoplesDemocraticRepublic"] = "LaoPeoplesDemocraticRepublic";
  CountryName["Latvia"] = "Latvia";
  CountryName["Lebanon"] = "Lebanon";
  CountryName["Lesotho"] = "Lesotho";
  CountryName["Liberia"] = "Liberia";
  CountryName["LibyanArabJamahiriya"] = "LibyanArabJamahiriya";
  CountryName["Liechtenstein"] = "Liechtenstein";
  CountryName["Lithuania"] = "Lithuania";
  CountryName["Luxembourg"] = "Luxembourg";
  CountryName["Macao"] = "Macao";
  CountryName["Macedonia"] = "Macedonia";
  CountryName["Madagascar"] = "Madagascar";
  CountryName["Malawi"] = "Malawi";
  CountryName["Malaysia"] = "Malaysia";
  CountryName["Maldives"] = "Maldives";
  CountryName["Mali"] = "Mali";
  CountryName["Malta"] = "Malta";
  CountryName["MarshallIslands"] = "MarshallIslands";
  CountryName["Martinique"] = "Martinique";
  CountryName["Mauritania"] = "Mauritania";
  CountryName["Mauritius"] = "Mauritius";
  CountryName["Mayotte"] = "Mayotte";
  CountryName["Mexico"] = "Mexico";
  CountryName["Micronesia"] = "Micronesia";
  CountryName["Moldova"] = "Moldova";
  CountryName["Monaco"] = "Monaco";
  CountryName["Mongolia"] = "Mongolia";
  CountryName["Montenegro"] = "Montenegro";
  CountryName["Montserrat"] = "Montserrat";
  CountryName["Morocco"] = "Morocco";
  CountryName["Mozambique"] = "Mozambique";
  CountryName["Myanmar"] = "Myanmar";
  CountryName["Namibia"] = "Namibia";
  CountryName["Nauru"] = "Nauru";
  CountryName["Nepal"] = "Nepal";
  CountryName["Netherlands"] = "Netherlands";
  CountryName["NewCaledonia"] = "NewCaledonia";
  CountryName["NewZealand"] = "NewZealand";
  CountryName["Nicaragua"] = "Nicaragua";
  CountryName["Niger"] = "Niger";
  CountryName["Nigeria"] = "Nigeria";
  CountryName["Niue"] = "Niue";
  CountryName["NorfolkIsland"] = "NorfolkIsland";
  CountryName["NorthernMarianaIslands"] = "NorthernMarianaIslands";
  CountryName["Norway"] = "Norway";
  CountryName["Oman"] = "Oman";
  CountryName["Pakistan"] = "Pakistan";
  CountryName["Palau"] = "Palau";
  CountryName["PalestinianTerritory"] = "PalestinianTerritory";
  CountryName["Panama"] = "Panama";
  CountryName["PapuaNewGuinea"] = "PapuaNewGuinea";
  CountryName["Paraguay"] = "Paraguay";
  CountryName["Peru"] = "Peru";
  CountryName["Philippines"] = "Philippines";
  CountryName["Pitcairn"] = "Pitcairn";
  CountryName["Poland"] = "Poland";
  CountryName["Portugal"] = "Portugal";
  CountryName["PuertoRico"] = "PuertoRico";
  CountryName["Qatar"] = "Qatar";
  CountryName["Reunion"] = "Reunion";
  CountryName["Romania"] = "Romania";
  CountryName["RussianFederation"] = "RussianFederation";
  CountryName["Rwanda"] = "Rwanda";
  CountryName["SaintBarthelemy"] = "SaintBarthelemy";
  CountryName["SaintHelena"] = "SaintHelena";
  CountryName["SaintKittsAndNevis"] = "SaintKittsAndNevis";
  CountryName["SaintLucia"] = "SaintLucia";
  CountryName["SaintMartin"] = "SaintMartin";
  CountryName["SaintPierreAndMiquelon"] = "SaintPierreAndMiquelon";
  CountryName["SaintVincentAndGrenadines"] = "SaintVincentAndGrenadines";
  CountryName["Samoa"] = "Samoa";
  CountryName["SanMarino"] = "SanMarino";
  CountryName["SaoTomeAndPrincipe"] = "SaoTomeAndPrincipe";
  CountryName["SaudiArabia"] = "SaudiArabia";
  CountryName["Senegal"] = "Senegal";
  CountryName["Serbia"] = "Serbia";
  CountryName["Seychelles"] = "Seychelles";
  CountryName["SierraLeone"] = "SierraLeone";
  CountryName["Singapore"] = "Singapore";
  CountryName["SintMaarten"] = "SintMaarten";
  CountryName["Slovakia"] = "Slovakia";
  CountryName["Slovenia"] = "Slovenia";
  CountryName["SolomonIslands"] = "SolomonIslands";
  CountryName["Somalia"] = "Somalia";
  CountryName["SouthAfrica"] = "SouthAfrica";
  CountryName["SouthGeorgiaAndSandwichIsl"] = "SouthGeorgiaAndSandwichIsl";
  CountryName["SouthSudan"] = "SouthSudan";
  CountryName["Spain"] = "Spain";
  CountryName["SriLanka"] = "SriLanka";
  CountryName["Sudan"] = "Sudan";
  CountryName["Suriname"] = "Suriname";
  CountryName["SvalbardAndJanMayen"] = "SvalbardAndJanMayen";
  CountryName["Swaziland"] = "Swaziland";
  CountryName["Sweden"] = "Sweden";
  CountryName["Switzerland"] = "Switzerland";
  CountryName["SyrianArabRepublic"] = "SyrianArabRepublic";
  CountryName["Taiwan"] = "Taiwan";
  CountryName["Tajikistan"] = "Tajikistan";
  CountryName["Tanzania"] = "Tanzania";
  CountryName["Thailand"] = "Thailand";
  CountryName["TimorLeste"] = "TimorLeste";
  CountryName["Togo"] = "Togo";
  CountryName["Tokelau"] = "Tokelau";
  CountryName["Tonga"] = "Tonga";
  CountryName["TrinidadAndTobago"] = "TrinidadAndTobago";
  CountryName["Tunisia"] = "Tunisia";
  CountryName["Turkey"] = "Turkey";
  CountryName["Turkmenistan"] = "Turkmenistan";
  CountryName["TurksAndCaicosIslands"] = "TurksAndCaicosIslands";
  CountryName["Tuvalu"] = "Tuvalu";
  CountryName["Uganda"] = "Uganda";
  CountryName["Ukraine"] = "Ukraine";
  CountryName["UnitedArabEmirates"] = "UnitedArabEmirates";
  CountryName["UnitedKingdom"] = "UnitedKingdom";
  CountryName["UnitedStates"] = "UnitedStates";
  CountryName["UnitedStatesOutlyingIslands"] = "UnitedStatesOutlyingIslands";
  CountryName["Uruguay"] = "Uruguay";
  CountryName["Uzbekistan"] = "Uzbekistan";
  CountryName["Vanuatu"] = "Vanuatu";
  CountryName["Venezuela"] = "Venezuela";
  CountryName["Vietnam"] = "Vietnam";
  CountryName["VirginIslandsBritish"] = "VirginIslandsBritish";
  CountryName["VirginIslandsUS"] = "VirginIslandsUS";
  CountryName["WallisAndFutuna"] = "WallisAndFutuna";
  CountryName["WesternSahara"] = "WesternSahara";
  CountryName["Yemen"] = "Yemen";
  CountryName["Zambia"] = "Zambia";
  CountryName["Zimbabwe"] = "Zimbabwe";
})(exports.CountryName || (exports.CountryName = {}));

/**
 * The genre of a release/recording, including up to two levels of detail; maps to `genre_type`
 */

var GenreType = /*#__PURE__*/function () {
  /**
   * Constructor for `GenreType` objects. Takes all of the attributes as an object.
   * @param genre - An object containing all fields for the GenreType.
   */
  function GenreType(genre) {
    /**
     * Primary genre. Use the Genre enum for validation; maps to `primary`
     */
    this.primary = '';
    Object.assign(this, genre);
  }
  /**
   * Generates AudioSalad XML for the genre.
   * @returns AudioSalad XML `<genre>` element
   */


  var _proto = GenreType.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <genre>\n                <primary>" + xmlEscape(this.primary) + "</primary>\n                " + (this.sub ? "<sub>" + xmlEscape(this.sub) + "</sub>" : '') + "\n            </genre>\n        ");
  };

  return GenreType;
}();

/**
 * Describes the record label that has produced a given release, the name being the only
 * mandatory element; maps to `label_type`
 */

var Label = /*#__PURE__*/function () {
  /**
   * Constructor for `Label` objects. Takes all of the attributes as an object.
   * @param label - An object containing all fields for the Label.
   */
  function Label(label) {
    /**
     * Full name of the record label; maps to `name`
     */
    this.name = '';
    Object.assign(this, label);
  }
  /**
   * Generates AudioSalad XML for the label.
   * @returns AudioSalad XML `<label>` element
   */


  var _proto = Label.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <label>\n                " + (this.vendorLabelID ? "<vendor_label_id>" + xmlEscape(this.vendorLabelID) + "</vendor_label_id>" : '') + "\n                <name>" + xmlEscape(this.name) + "</name>\n                " + (this.city ? "<city>" + xmlEscape(this.city) + "</city>" : '') + "\n                " + (this.state ? "<state>" + xmlEscape(this.state) + "</state>" : '') + "\n                " + (this.country ? "<country>" + xmlEscape(this.country) + "</country>" : '') + "                        \n            </label>\n        ");
  };

  return Label;
}();

/**
 * A pricing tier identifier as applies to a download platform; maps to `price_tier_type`
 */

var PriceTier = /*#__PURE__*/function () {
  /**
   * Constructor for `PriceTier` objects. Takes all of the attributes as an object.
   * @param priceTier - An object containing all fields for the PriceTier.
   */
  function PriceTier(priceTier) {
    /**
     * The platform for which this tier applies, e.g. iTunes, Generic; maps to `type`
     */
    this.type = 'iTunes';
    /**
     * The price tier identifier. Use the iTunesPriceTier enum for easy access to valid iTunes
     * price tiers. This also accepts strings for generic or new iTunes tiers.
     */

    this.name = 'Mid';
    Object.assign(this, priceTier);
  }
  /**
   * Generates AudioSalad XML for the price tier.
   * @returns AudioSalad XML `<price_tier>` element
   */


  var _proto = PriceTier.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <price_tier>\n                 <type>" + xmlEscape(this.type) + "</type>\n                 <name>" + xmlEscape(this.name) + "</name>\n            </price_tier>\n        ");
  };

  return PriceTier;
}();

/**
 * A date and region-bounded distribution permissions; maps to `permission_type`
 */

var Permission = /*#__PURE__*/function () {
  /**
   * Constructor for `Permission` objects. Takes all of the attributes as an object.
   * @param permission - An object containing all fields for the Permission.
   */
  function Permission(permission) {
    /**
     * The permissions type. See AudioSalad documentation for possible types; maps to `type`
     */
    this.type = '';
    /**
     * Boolean flag defining whether the permissions is granted or not; maps to `enabled`
     */

    this.enabled = true;
    /**
     * A 2-character ISO country code indicating the regions where this applies. Use the
     * CountryCode enum for an easy, validated option; maps to `country_code`
     */

    this.countryCode = [];
    Object.assign(this, permission);
  }
  /**
   * Generates AudioSalad XML for the permissions.
   * @returns AudioSalad XML `<permissions>` element
   */


  var _proto = Permission.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <permission>\n                <type>" + xmlEscape(this.type) + "</type>\n                <enabled>" + this.enabled + "</enabled>\n                " + (this.startDate ? "<start_date>" + xmlEscape(this.startDate.toISOString()) + "</start_date>" : '') + "\n                " + (this.endDate ? "<end_date>" + xmlEscape(this.endDate.toISOString()) + "</end_date>" : '') + "\n                " + (this.countryCode ? this.countryCode.map(function (code) {
      return "<country_code>" + xmlEscape(code) + "</country_code>";
    }).join('') : '') + "\n            </permission>\n        ");
  };

  return Permission;
}();

/**
 * Encapsulates a release's or track's presence within a given country; maps to `territory_type`
 */

var Territory = /*#__PURE__*/function () {
  /**
   * Constructor for `Territory` objects. Takes all of the attributes as an object.
   * @param territory - An object containing all fields for the Territory.
   */
  function Territory(territory) {
    /**
     * Country code as a 2-character ISO, or WW for worldwide. Use the CountryCode enum for easy
     * validation of input.
     */
    this.countryCode = [exports.CountryCode.Worldwide];
    Object.assign(this, territory);
  }
  /**
   * Generates AudioSalad XML for the territory.
   * @returns AudioSalad XML `<territory>` element
   */


  var _proto = Territory.prototype;

  _proto.xml = function xml() {
    var _this$permissions$for, _this$permissions;

    return formatXml("\n            <territory>\n                 " + this.countryCode.map(function (code) {
      return "<country_code>" + xmlEscape(code) + "</country_code>";
    }).join('') + "\n                 " + (this.releaseDate ? "<release_date>" + xmlEscape(this.releaseDate.toISOString()) + "</release_date>" : '') + "\n                 " + ((_this$permissions$for = (_this$permissions = this.permissions) == null ? void 0 : _this$permissions.forEach(function (permission) {
      return permission.xml();
    })) != null ? _this$permissions$for : '') + "\n            </territory>\n        ");
  };

  return Territory;
}();

/**
 * Encapsulates a file asset, e.g. an audio recording, artwork image, etc; maps to `asset_type`
 */

var Asset = /*#__PURE__*/function () {
  /**
   * Constructor for `Asset` objects. Takes all of the attributes as an object.
   * @param asset - An object containing all fields for the Asset.
   */
  function Asset(asset) {
    /**
     * The asset type. Generally this will be either `audio`, `image`, or `asset` (for all other
     * types of assets), but any string can be provided; maps to `type`
     */
    this.type = '';
    /**
     * A 128-bit MD5 hash for the file, to ensure its contents; maps to `md5_checksum`
     */

    this.md5Checksum = '';
    /**
     * The real filename with extension (if applicable) and without disk folder structure; maps
     * to `file_name`
     */

    this.fileName = '';
    Object.assign(this, asset);
  }
  /**
   * Generates AudioSalad XML for the asset.
   * @returns AudioSalad XML `<asset>` element
   */


  var _proto = Asset.prototype;

  _proto.xml = function xml() {
    var _this$attr$forEach, _this$attr;

    return formatXml("\n            <asset>\n                <type>" + xmlEscape(this.type) + "</type>\n                " + (this.subtype ? "<sub_type>" + xmlEscape(this.subtype) + "</sub_type>" : '') + "\n                " + (this.name ? "<name>" + xmlEscape(this.name) + "</name>" : '') + "\n                " + (this.notes ? "<notes>" + xmlEscape(this.notes) + "</notes>" : '') + "\n                " + (this.format ? "<format>" + xmlEscape(this.format) + "</format>" : '') + "\n                " + (this.mimeType ? "<mime_type>" + xmlEscape(this.mimeType) + "</mime_type>" : '') + "\n                <md5_checksum>" + xmlEscape(this.md5Checksum) + "</md5_checksum>\n                <file_name>" + xmlEscape(this.fileName) + "</file_name>\n                " + ((_this$attr$forEach = (_this$attr = this.attr) == null ? void 0 : _this$attr.forEach(function (attr) {
      return attr.xml();
    })) != null ? _this$attr$forEach : '') + "\n            </asset>\n        ");
  };

  return Asset;
}();

/**
 * Describes a single track within a release; maps to `track_type`
 */

var Track = /*#__PURE__*/function () {
  /**
   * Constructor for `Track` objects. Takes all of the attributes as an object.
   * @param track - An object containing all fields for the Track.
   */
  function Track(track) {
    /**
     * The track number within the disc/release; maps to `track_number`
     */
    this.trackNumber = 1;
    /**
     * Track title, minus any title version; maps to `title`
     */

    this.title = '';
    /**
     * The display artist's name, as it will appear on the track listing; maps to `display_artist`
     */

    this.displayArtist = '';
    Object.assign(this, track);
  }
  /**
   * Generates AudioSalad XML for the track.
   * @returns AudioSalad XML `<track>` element
   */


  var _proto = Track.prototype;

  _proto.xml = function xml() {
    var _this$participants$ma, _this$participants, _this$genres$map$join, _this$genres, _this$tags$map$join, _this$tags, _this$texts$map$join, _this$texts, _this$priceTiers$map$, _this$priceTiers, _this$permissions$map, _this$permissions, _this$territories$map, _this$territories, _this$assets$map$join, _this$assets, _this$attr$map$join, _this$attr;

    return formatXml("\n            <track>\n                " + (this.vendorTrackID ? "<vendor_track_id>" + xmlEscape(this.vendorTrackID) + "</vendor_track_id>" : '') + "\n                " + (this.isrc ? "<isrc>" + xmlEscape(this.isrc) + "</isrc>" : '') + "\n                " + (this.iswc ? "<iswc>" + xmlEscape(this.iswc) + "</iswc>" : '') + "\n                " + (this.discNumber ? "<disc_number>" + this.discNumber + "</disc_number>" : '') + "\n                " + (this.trackNumber ? "<track_number>" + this.trackNumber + "</track_number>" : '') + "\n                <title>" + xmlEscape(this.title) + "</title>\n                " + (this.titleVersion ? "<title_version>" + xmlEscape(this.titleVersion) + "</title_version>" : '') + "                \n                " + (this.work ? "<work>" + xmlEscape(this.work) + "</work>" : '') + "                \n                " + (this.trackLength ? "<track_length>" + this.trackLength + "</track_length>" : '') + "                \n                " + (this.advisory ? "<advisory>" + this.advisory + "</advisory>" : '') + "                \n                " + (this.audioLanguage ? "<audio_language>" + xmlEscape(this.audioLanguage) + "</audio_language>" : '') + "                \n                " + (this.bpm ? "<bpm>" + this.bpm + "</bpm>" : '') + "                \n                " + (this.previewStart ? "<preview_start>" + this.previewStart + "</preview_start>" : '') + "                \n                " + (this.previewDuration ? "<preview_duration>" + this.previewDuration + "</preview_duration>" : '') + "\n                <display_artist>" + xmlEscape(this.displayArtist) + "</display_artist>                \n                " + ((_this$participants$ma = (_this$participants = this.participants) == null ? void 0 : _this$participants.map(function (participant) {
      return participant.xml();
    }).join('')) != null ? _this$participants$ma : '') + "               \n                " + ((_this$genres$map$join = (_this$genres = this.genres) == null ? void 0 : _this$genres.map(function (genre) {
      return genre.xml();
    }).join('')) != null ? _this$genres$map$join : '') + "\n                " + ((_this$tags$map$join = (_this$tags = this.tags) == null ? void 0 : _this$tags.map(function (tag) {
      return "<tag>" + xmlEscape(tag) + "</tag>";
    }).join('')) != null ? _this$tags$map$join : '') + "\n                " + (this.notes ? "<notes>" + xmlEscape(this.notes) + "</notes>" : '') + "   \n                " + ((_this$texts$map$join = (_this$texts = this.texts) == null ? void 0 : _this$texts.map(function (text) {
      return text.xml();
    }).join('')) != null ? _this$texts$map$join : '') + "\n                " + (this.cInfo ? "<c_info>" + xmlEscape(this.cInfo) + "</c_info>" : '') + "   \n                " + (this.cYear ? "<c_year>" + this.cYear + "</c_year>" : '') + " \n                " + (this.pInfo ? "<p_info>" + xmlEscape(this.pInfo) + "</p_info>" : '') + "   \n                " + (this.pYear ? "<p_year>" + this.pYear + "</p_year>" : '') + " \n                " + (this.rightsHolders ? "<rights_holders>" + xmlEscape(this.rightsHolders) + "</rights_holders>" : '') + "\n                " + ((_this$priceTiers$map$ = (_this$priceTiers = this.priceTiers) == null ? void 0 : _this$priceTiers.map(function (tier) {
      return tier.xml();
    }).join('')) != null ? _this$priceTiers$map$ : '') + "\n                " + ((_this$permissions$map = (_this$permissions = this.permissions) == null ? void 0 : _this$permissions.map(function (permission) {
      return permission.xml();
    }).join('')) != null ? _this$permissions$map : '') + "\n                " + ((_this$territories$map = (_this$territories = this.territories) == null ? void 0 : _this$territories.map(function (territory) {
      return territory.xml();
    }).join('')) != null ? _this$territories$map : '') + "\n                " + ((_this$assets$map$join = (_this$assets = this.assets) == null ? void 0 : _this$assets.map(function (asset) {
      return asset.xml();
    }).join('')) != null ? _this$assets$map$join : '') + "\n                " + ((_this$attr$map$join = (_this$attr = this.attr) == null ? void 0 : _this$attr.map(function (attribute) {
      return attribute.xml();
    }).join('')) != null ? _this$attr$map$join : '') + "\n            </track>\n        ");
  };

  return Track;
}();

/**
 * Available actions for AudioSalad ingestion..
 */

(function (Action) {
  Action["Add"] = "add";
  Action["Update"] = "update";
  Action["FullUpdate"] = "full-update";
  Action["MetaUpdate"] = "meta-update";
  Action["Delete"] = "delete";
})(exports.Action || (exports.Action = {}));

/**
 * Defines a delivery to a set of DSPs; maps to `dsp_delivery_type`
 */

var Delivery = /*#__PURE__*/function () {
  /**
   * Constructor for Deliveries. Takes all of the release attributes as an object.
   * @param delivery - An object containing all fields for the Delivery.
   */
  function Delivery(delivery) {
    /**
     * DSP identifiers for which to target this delivery; maps to `dsp`
     */
    this.dsps = [''];
    /**
     * Delivery action/operation. Use `Action` enum; maps to `action`
     */

    this.action = exports.Action.Add;
    Object.assign(this, delivery);
  }
  /**
   * Generates AudioSalad XML for the delivery.
   * @returns AudioSalad XML `<dsp_delivery>` element
   */


  var _proto = Delivery.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <dsp_delivery>\n                 " + this.dsps.map(function (dsp) {
      return "<dsp>" + xmlEscape(dsp) + "</dsp>";
    }).join('') + "\n                 <action>" + this.action + "</action>\n                 " + (this.deliveryDate ? "<delivery_date>" + xmlEscape(this.deliveryDate.toISOString()) + "</delivery_date>" : '') + "\n            </dsp_delivery>\n        ");
  };

  return Delivery;
}();

/**
 * Encapsulates a generic key/value pair attribute; maps to attr_type
 */

var Attr = /*#__PURE__*/function () {
  /**
   * Constructor for `Attr` objects. Takes all of the Attr attributes as an object.
   * @param attr - An object containing all fields for the `Attr`.
   */
  function Attr(attr) {
    /**
     * The attribute key as a string, maps to `key`
     */
    this.key = '';
    /**
     * The attribute value as a string (even if the attribute itself is actually not of type
     * string; please cast it as a string so it can be encoded into the XML); maps to `value`
     */

    this.value = '';
    Object.assign(this, attr);
  }
  /**
   * Generates AudioSalad XML for the attribute.
   * @returns AudioSalad XML `<attr>` element
   */


  var _proto = Attr.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <attr>\n                " + (this.type ? "<type>" + xmlEscape(this.type) + "</type>" : '') + "\n                <key>" + xmlEscape(this.key) + "</key>\n                <value>" + xmlEscape(this.value) + "</value>\n            </attr>\n        ");
  };

  return Attr;
}();

/**
 * Encapsulates a piece of textual information. Applies for both release level and track level;
 * maps to `text_type`
 */

var Text = /*#__PURE__*/function () {
  /**
   * Constructor for `Text` objects. Takes all of the attributes as an object.
   * @param text - An object containing all fields for the Text.
   */
  function Text(text) {
    /**
     * The plaintext, HTML, or TTML content; maps to `content`
     */
    this.content = '';
    Object.assign(this, text);
  }
  /**
   * Generates AudioSalad XML for the text.
   * @returns AudioSalad XML `<text>` element
   */


  var _proto = Text.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <text>\n                " + (this.type ? "<type>" + xmlEscape(this.type) + "</type>" : '') + "\n                " + (this.language ? "<language>" + xmlEscape(this.language) + "</language>" : '') + "\n                <content>" + xmlEscape(this.content) + "</content>\n            </text>\n        ");
  };

  return Text;
}();

/**
 * Enumeration for available genres.
 */

(function (Genre) {
  Genre["Alternative"] = "Alternative";
  Genre["Blues"] = "Blues";
  Genre["Children"] = "Children";
  Genre["ChristianGospel"] = "Christian & Gospel";
  Genre["Classical"] = "Classical";
  Genre["Country"] = "Country";
  Genre["Dance"] = "Dance";
  Genre["Electronic"] = "Electronic";
  Genre["Folk"] = "Folk";
  Genre["HipHopRap"] = "Hip Hop/Rap";
  Genre["Holiday"] = "Holiday";
  Genre["IndieRock"] = "Indie Rock";
  Genre["Jazz"] = "Jazz";
  Genre["Latin"] = "Latin";
  Genre["NewAge"] = "New Age";
  Genre["Pop"] = "Pop";
  Genre["RBSoul"] = "R&B/Soul";
  Genre["Reggae"] = "Reggae";
  Genre["Rock"] = "Rock";
  Genre["SingerSongwriter"] = "Singer/Songwriter";
  Genre["World"] = "World";
})(exports.Genre || (exports.Genre = {}));

(function (SubGenre) {
  SubGenre["AlternativeIndieRock"] = "Indie Rock";
  SubGenre["DanceBreakbeat"] = "Breakbeat";
  SubGenre["DanceElectroHouse"] = "Electro House";
  SubGenre["DanceHouse"] = "House";
  SubGenre["DanceTechno"] = "Techno";
  SubGenre["ElectronicAmbient"] = "Ambient";
  SubGenre["ElectronicElectronica"] = "Electronica";
  SubGenre["ElectronicExperimental"] = "Experimental";
  SubGenre["HipHopRapAlternativeRap"] = "Alternative Rap";
  SubGenre["HolidayChristmas"] = "Christmas";
  SubGenre["LatinRegionalMexicano"] = "Regional Mexicano";
  SubGenre["LatinSalsa"] = "Salsa";
  SubGenre["PopAdultContemporary"] = "Adult Contemporary";
  SubGenre["PopKPop"] = "K-Pop";
  SubGenre["PopPopRock"] = "Pop/Rock";
  SubGenre["PopSoftRock"] = "Soft Rock";
  SubGenre["RBSoulFunk"] = "Funk";
  SubGenre["RockMetal"] = "Metal";
  SubGenre["WorldAfroBeat"] = "Afro-Beat";
})(exports.SubGenre || (exports.SubGenre = {}));

/**
 * Release text item types.
 */

(function (ReleaseTextType) {
  ReleaseTextType["LinerNotes"] = "Liner Notes";
  ReleaseTextType["Memo"] = "Memo";
  ReleaseTextType["Review"] = "Review";
  ReleaseTextType["Other"] = "Other";
})(exports.ReleaseTextType || (exports.ReleaseTextType = {}));

(function (TrackTextType) {
  TrackTextType["Lyrics"] = "Lyrics";
  TrackTextType["LyricsTTML"] = "Lyrics TTML";
  TrackTextType["Notes"] = "Notes";
})(exports.TrackTextType || (exports.TrackTextType = {}));

// eslint-disable-next-line @typescript-eslint/naming-convention

(function (iTunesPriceTier) {
  iTunesPriceTier["Digital45"] = "Digital 45";
  iTunesPriceTier["MiniEP"] = "Mini EP";
  iTunesPriceTier["EP"] = "EP";
  iTunesPriceTier["MiniAlbumOne"] = "Mini Album One";
  iTunesPriceTier["MiniAlbumTwo"] = "Mini Album Two";
  iTunesPriceTier["BudgetOne"] = "Budget One";
  iTunesPriceTier["BudgetTwo"] = "Budget Two";
  iTunesPriceTier["Back"] = "Back";
  iTunesPriceTier["Mid"] = "Mid";
  iTunesPriceTier["MidFront"] = "Mid/Front";
  iTunesPriceTier["FrontOne"] = "Front One";
  iTunesPriceTier["FrontTwo"] = "Front Two";
  iTunesPriceTier["FrontPlus"] = "Front Plus";
  iTunesPriceTier["DeluxeOne"] = "Deluxe One";
  iTunesPriceTier["DeluxeTwo"] = "Deluxe Two";
  iTunesPriceTier["DeluxeThree"] = "Deluxe Three";
  iTunesPriceTier["DeluxeFour"] = "Deluxe Four";
})(exports.iTunesPriceTier || (exports.iTunesPriceTier = {}));

var AttributeType;

(function (AttributeType) {
  AttributeType["Integer"] = "integer";
  AttributeType["Float"] = "float";
  AttributeType["Boolean"] = "boolean";
  AttributeType["Date"] = "date";
  AttributeType["String"] = "string";
  AttributeType["Data"] = "data";
})(AttributeType || (AttributeType = {}));

var Release = /*#__PURE__*/function () {
  /**
   * Constructor for Releases. Takes all of the release attributes as an object.
   * @param release - An object containing all fields for the Release.
   */
  function Release(release) {
    /**
     * AudioSalad data operation for the file; maps to `action`
     */
    this.action = exports.Action.Add;
    /**
     * Album/release title, minus any title version; maps to `title`
     */

    this.title = '';
    /**
     * Artist's name as it appears on the release; maps to `display_artist`
     */

    this.displayArtist = '';
    /**
     * An array of tracks associated with the release. Use the `Track` interface; maps to `track`
     */

    this.tracks = [];
    Object.assign(this, release);
  }
  /**
   * Generates AudioSalad XML for the release.
   * @returns AudioSalad XML `<release>` element
   */


  var _proto = Release.prototype;

  _proto.xml = function xml() {
    var _this$participants$ma, _this$participants, _this$genres$map$join, _this$genres, _this$tags$map$join, _this$tags, _this$texts$map$join, _this$texts, _this$priceTiers$map$, _this$priceTiers, _this$permissions$map, _this$permissions, _this$territories$map, _this$territories, _this$assets$map$join, _this$assets, _this$dspDeliveries$m, _this$dspDeliveries, _this$attr$map$join, _this$attr;

    return formatXml("\n            <release xmlns=\"audiosalad_export_v3.2\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"audiosalad_export_v3.2 http://audiosalad-xsd.s3.amazonaws.com/audiosalad_export_v3.2.xsd\">\n                <schema_id>audiosalad_export_v3.2</schema_id>\n                " + (this.distributorName ? "<distributor_name>" + xmlEscape(this.distributorName) + "</distributor_name>" : '') + "\n                " + (this.exportID ? "<export_id>" + xmlEscape(this.exportID) + "</export_id>" : '') + "\n                " + (this.exportTime ? "<export_time>" + xmlEscape(this.exportTime.toISOString()) + "</export_time>" : '') + "\n                <action>" + xmlEscape(this.action) + "</action>\n                " + (this.upc ? "<upc_ean>" + this.upc + "</upc_ean>" : '') + "\n                " + (this.vendorReleaseID ? "<vendor_release_id>" + xmlEscape(this.vendorReleaseID) + "</vendor_release_id>" : '') + "\n                " + (this.globalReleaseID ? "<global_release_id>" + xmlEscape(this.globalReleaseID) + "</global_release_id>" : '') + "\n                " + (this.catalogID ? "<catalog_id>" + xmlEscape(this.catalogID) + "</catalog_id>" : '') + "\n                " + (this.series ? "<series>" + xmlEscape(this.series) + "</series>" : '') + "\n                <title>" + xmlEscape(this.title) + "</title>\n                " + (this.titleVersion ? "<title_version>" + xmlEscape(this.titleVersion) + "</title_version>" : '') + "\n                " + (this.advisory ? "<advisory>" + xmlEscape(this.advisory) + "</advisory>" : '') + "\n                " + (this.metadataLanguage ? "<metadata_language>" + xmlEscape(this.metadataLanguage) + "</metadata_language>" : '') + "\n                " + (this.audioLanguage ? "<audio_language>" + xmlEscape(this.audioLanguage) + "</audio_language>" : '') + "\n                <display_artist>" + xmlEscape(this.displayArtist) + "</display_artist>\n                " + ((_this$participants$ma = (_this$participants = this.participants) == null ? void 0 : _this$participants.map(function (participant) {
      return participant.xml();
    }).join('')) != null ? _this$participants$ma : '') + "               \n                " + (this.compilation ? "<compilation>" + this.compilation + "</compilation>" : '') + "\n                " + (this.originalReleaseDate ? "<original_release_date>" + xmlEscape(this.originalReleaseDate.toISOString().split('T')[0]) + "</original_release_date>" : '') + "\n                " + (this.releaseDate ? "<release_date>" + xmlEscape(this.releaseDate.toISOString().split('T')[0]) + "</release_date>" : '') + "\n                " + (this.releaseFormat ? "<release_format>" + xmlEscape(this.releaseFormat) + "</release_format>" : '') + "\n                " + (this.recordingLocation ? "<recording_location>" + xmlEscape(this.recordingLocation) + "</recording_location>" : '') + "\n                " + (this.url ? "<url>" + xmlEscape(this.url) + "</url>" : '') + "\n                " + ((_this$genres$map$join = (_this$genres = this.genres) == null ? void 0 : _this$genres.map(function (genre) {
      return genre.xml();
    }).join('')) != null ? _this$genres$map$join : '') + "\n                " + ((_this$tags$map$join = (_this$tags = this.tags) == null ? void 0 : _this$tags.map(function (tag) {
      return "<tag>" + xmlEscape(tag) + "</tag>";
    }).join('')) != null ? _this$tags$map$join : '') + "\n                " + (this.notes ? "<notes>" + xmlEscape(this.notes) + "</notes>" : '') + "   \n                " + ((_this$texts$map$join = (_this$texts = this.texts) == null ? void 0 : _this$texts.map(function (text) {
      return text.xml();
    }).join('')) != null ? _this$texts$map$join : '') + "\n                " + (this.cInfo ? "<c_info>" + xmlEscape(this.cInfo) + "</c_info>" : '') + "   \n                " + (this.cYear ? "<c_year>" + this.cYear + "</c_year>" : '') + " \n                " + (this.pInfo ? "<p_info>" + xmlEscape(this.pInfo) + "</p_info>" : '') + "   \n                " + (this.pYear ? "<p_year>" + this.pYear + "</p_year>" : '') + " \n                " + (this.rightsHolders ? "<rights_holders>" + xmlEscape(this.rightsHolders) + "</rights_holders>" : '') + "\n                " + (this.label ? this.label.xml() : '') + "\n                " + ((_this$priceTiers$map$ = (_this$priceTiers = this.priceTiers) == null ? void 0 : _this$priceTiers.map(function (tier) {
      return tier.xml();
    }).join('')) != null ? _this$priceTiers$map$ : '') + "\n                " + ((_this$permissions$map = (_this$permissions = this.permissions) == null ? void 0 : _this$permissions.map(function (permission) {
      return permission.xml();
    }).join('')) != null ? _this$permissions$map : '') + "\n                " + (this.globalReleaseDate ? "<global_release_date>" + xmlEscape(this.globalReleaseDate.toISOString()) + "</global_release_date>" : '') + "\n                " + ((_this$territories$map = (_this$territories = this.territories) == null ? void 0 : _this$territories.map(function (territory) {
      return territory.xml();
    }).join('')) != null ? _this$territories$map : '') + "\n                " + ((_this$assets$map$join = (_this$assets = this.assets) == null ? void 0 : _this$assets.map(function (asset) {
      return asset.xml();
    }).join('')) != null ? _this$assets$map$join : '') + "\n                " + this.tracks.map(function (track) {
      return track.xml();
    }).join('') + "\n                " + ((_this$dspDeliveries$m = (_this$dspDeliveries = this.dspDeliveries) == null ? void 0 : _this$dspDeliveries.map(function (delivery) {
      return delivery.xml();
    }).join('')) != null ? _this$dspDeliveries$m : '') + "\n                " + ((_this$attr$map$join = (_this$attr = this.attr) == null ? void 0 : _this$attr.map(function (attribute) {
      return attribute.xml();
    }).join('')) != null ? _this$attr$map$join : '') + "\n            </release>\n        ");
  }
  /**
   * Generates a sample `Release` object that can be used for testing.
   */
  ;

  Release.sample = function sample() {
    return new Release({
      distributorName: 'Slingshot Records',
      exportID: 'abc123',
      exportTime: new Date('2020-05-02'),
      action: exports.Action.Add,
      upc: '123456789012',
      vendorReleaseID: 'xyz123',
      catalogID: 'SS-TST-01',
      series: 'Test Collection',
      title: 'Everything I Wanted',
      titleVersion: 'Slingshot Remix',
      advisory: 'explicit',
      metadataLanguage: 'English',
      audioLanguage: 'English',
      displayArtist: 'Billie Eilish',
      participants: [new Participant({
        role: exports.ParticipantRole.MainArtist,
        name: 'Billie Eilish',
        primary: true
      }), new Participant({
        role: exports.ParticipantRole.SongWriter,
        name: "Finneas O'Connell",
        primary: false
      })],
      compilation: false,
      originalReleaseDate: new Date('2020-05-02'),
      releaseDate: new Date('2020-05-02'),
      releaseFormat: exports.ReleaseFormat.Single,
      recordingLocation: exports.CountryCode.UnitedStates,
      url: 'https://billieeilish.com',
      genres: [new GenreType({
        primary: exports.Genre.Pop
      }), new GenreType({
        primary: exports.Genre.Pop,
        sub: exports.SubGenre.PopAdultContemporary
      })],
      tags: ['new', 'billie eilish', 'alternative'],
      notes: 'This is a test of the library',
      texts: [new Text({
        type: exports.ReleaseTextType.LinerNotes,
        language: 'English',
        content: 'Recorded at Slingshot Studios in Beverly Hills'
      })],
      cInfo: 'Billie Eilish, under exclusive license to Slingshot Records',
      cYear: 2020,
      pInfo: 'Billie Eilish, under exclusive license to Slingshot Records',
      pYear: 2020,
      rightsHolders: 'Billie Eilish, Slingshot Media',
      label: new Label({
        vendorLabelID: '1',
        name: 'Slingshot Records',
        city: 'Beverly Hills',
        state: 'California',
        country: exports.CountryName.UnitedStates
      }),
      priceTiers: [new PriceTier({
        type: 'iTunes',
        name: exports.iTunesPriceTier.Mid
      })],
      permissions: [new Permission({
        type: 'download',
        enabled: false,
        startDate: new Date('2021-01-01'),
        endDate: new Date('2021-12-31'),
        countryCode: [exports.CountryCode.Antarctica]
      })],
      globalReleaseDate: new Date('2020-05-02 21:00:00'),
      territories: [new Territory({
        countryCode: [exports.CountryCode.Worldwide]
      })],
      assets: [new Asset({
        type: 'image',
        name: 'Cover art',
        format: 'jpg',
        mimeType: 'image/jpeg',
        md5Checksum: '03a43f76d3e52c8a4cf24fd1d8d05911',
        fileName: 'cover-art.jpg'
      }), new Asset({
        type: 'audio',
        name: 'Everything I Wanted',
        format: 'flac',
        mimeType: 'audio/flac',
        md5Checksum: '4cf2392db7ccd6c9b663f8a4da42f9cb',
        fileName: 'everything-i-wanted.flac'
      })],
      tracks: [new Track({
        vendorTrackID: 'aaa111',
        isrc: 'QM7G92017457',
        trackNumber: 1,
        title: 'Everything I Wanted',
        trackLength: 181,
        advisory: 'explicit',
        audioLanguage: 'English',
        bpm: 120,
        previewStart: 30,
        previewDuration: 30,
        displayArtist: 'Billie Eilish',
        participants: [new Participant({
          role: exports.ParticipantRole.MainArtist,
          name: 'Billie Eilish',
          primary: true
        }), new Participant({
          role: exports.ParticipantRole.SongWriter,
          name: "Finneas O'Connell",
          primary: false
        })],
        texts: [new Text({
          type: exports.TrackTextType.Lyrics,
          language: 'English',
          content: "As long as I'm here\n                                No one can hurt you\n                                Don't wanna lie here\n                                But you can learn to\n                                If I could change\n                                The way that you see yourself\n                                You wouldn't wonder why you hear\n                                They don't deserve you"
        })],
        cInfo: 'Billie Eilish, under exclusive license to Slingshot Records',
        cYear: 2020,
        pInfo: 'Billie Eilish, under exclusive license to Slingshot Records',
        pYear: 2020,
        rightsHolders: 'Billie Eilish, Slingshot Media',
        priceTiers: [new PriceTier({
          type: 'iTunes',
          name: exports.iTunesPriceTier.Mid
        })],
        attr: [new Attr({
          type: AttributeType.String,
          key: 'ss_id',
          value: 'test1234'
        })]
      })],
      dspDeliveries: [new Delivery({
        dsps: ['spotify'],
        action: exports.Action.Add,
        deliveryDate: new Date('2021-02-12')
      })],
      attr: [new Attr({
        type: AttributeType.String,
        key: 'ss_id',
        value: '1234test'
      })]
    });
  };

  return Release;
}();

/**
 * Represents a proprietary participant ID, e.g. for Spotify or Apple artist IDs.
 */

var ProprietaryID = /*#__PURE__*/function () {
  function ProprietaryID() {
    /**
     * What type of identifier this is, e.g. spotify; maps to `type`
     */
    this.type = '';
    /**
     * The identifier; maps to `id`
     */

    this.id = '';
  }
  /**
   * Generates AudioSalad XML for the ID.
   * @returns AudioSalad XML `<artist_id>` element
   */


  var _proto = ProprietaryID.prototype;

  _proto.xml = function xml() {
    return formatXml("\n            <artist_id>\n                <type>" + xmlEscape(this.type) + "</type>\n                <id>" + xmlEscape(this.id) + "</id>                                        \n            </artist_id>\n        ");
  };

  return ProprietaryID;
}();

exports.Asset = Asset;
exports.Attr = Attr;
exports.Delivery = Delivery;
exports.GenreType = GenreType;
exports.Label = Label;
exports.Participant = Participant;
exports.Permission = Permission;
exports.PriceTier = PriceTier;
exports.ProprietaryID = ProprietaryID;
exports.Release = Release;
exports.Territory = Territory;
exports.Text = Text;
exports.Track = Track;
//# sourceMappingURL=audiosalad-xml.cjs.development.js.map
