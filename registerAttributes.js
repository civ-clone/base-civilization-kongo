"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kongo_1 = require("./Kongo");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Kongo',
    nation: 'the Kingdom of Kongo',
    colors: ['#E91E63', '#000'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Kongo_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map