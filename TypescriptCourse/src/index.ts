import { Persona } from "./Persona";

class Main {
    constructor(){}
    public static run() {
        var persona = new Persona('AAAAAAAA', 28, 100.0);
        console.log(persona.nombre, persona.edad);
        persona.crecer();
        persona.crecer();
        persona.crecer();
        persona.crecer();
        console.log(persona.nombre, persona.edad);
    }
}

Main.run();


