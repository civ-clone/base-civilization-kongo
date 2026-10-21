import Kongo from './Kongo';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Kongo, i === 0))
);
