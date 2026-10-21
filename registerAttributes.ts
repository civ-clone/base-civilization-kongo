import Kongo from './Kongo';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Kongo',
  nation: 'the Kingdom of Kongo',
  colors: ['#E91E63', '#000'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Kongo, name, value))
);
