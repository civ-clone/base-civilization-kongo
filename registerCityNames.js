"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kongo_1 = require("./Kongo");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Mbanza Kongo',
    'Soyo',
    'Mbata',
    'Nsundi',
    'Mpangu',
    'Mpemba',
    'Mbamba',
    'Loango',
    'Kakongo',
    'Ngoyo',
    'Boma',
    'Matadi',
    'Kinshasa',
    'Brazzaville',
    'Pointe-Noire',
    'Mbanza-Ngungu',
    'Kimpese',
    'Madimba',
    'Inkisi',
    'Lukula',
    'Kikwit',
    'Bandundu',
    'Kisantu',
    'Luozi',
    'Mbanza Wembo',
    'Kabinda',
    'Tshela',
    'Seke-Banza',
    'Kasangulu',
    'Muanda',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Kongo_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map