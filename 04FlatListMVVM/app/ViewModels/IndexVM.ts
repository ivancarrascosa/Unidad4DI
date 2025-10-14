import { RepositoryPersona } from "../Models/Data/RepositoryPersona";
import { Persona } from "../Models/Entities/PersonaModel";

export class IndexVM {
    private _personas: Persona[] | null = null;

    private _personaSeleccionada: Persona | null = null;
    
    public get personas(): Persona[] {
        this._personas = RepositoryPersona.Personas;
        return this._personas
    }
    
    public get personaSeleccionada(): Persona | null{
        return this._personaSeleccionada
    }

    public set personaSeleccionada(value: Persona | null) {
        this._personaSeleccionada = value;
        this.alertaPersona();
    }

    public alertaPersona(): void {
        alert(`La persona seleccionada es ${this._personaSeleccionada?.nombre} ${this._personaSeleccionada?.apellidos}`);
    }

    }    