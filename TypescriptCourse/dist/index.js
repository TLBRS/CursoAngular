"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
class Main {
    constructor() { }
    static run() {
        var persona = new Persona_1.Persona('AAAAAAAA', 28, 100.0);
        console.log(persona.nombre, persona.edad);
        persona.crecer();
        persona.crecer();
        persona.crecer();
        persona.crecer();
        console.log(persona.nombre, persona.edad);
    }
}
Main.run();
