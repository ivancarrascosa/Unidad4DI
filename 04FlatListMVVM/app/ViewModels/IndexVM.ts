import { RepositoryPersona } from "../Models/Data/RepositoryPersona";
import { Persona } from "../Models/Entities/PersonaModel";

export class IndexVM {
    private expandedIds: Set<number> = new Set();
    private static instance: IndexVM;
    
    public getPersonas(): Persona[] {
        return RepositoryPersona.Personas;
    }
    
    public static getInstance(): IndexVM {
        if (!IndexVM.instance) {
            IndexVM.instance = new IndexVM();
        }
        return IndexVM.instance;
    }

    public isExpanded(id: number): boolean {
        return this.expandedIds.has(id);
    }
    
    public toggleExpanded(id: number): void {
        if (this.expandedIds.has(id)) {
            this.expandedIds.delete(id);
        } else {
            this.expandedIds.add(id);
        }
    }
    
    public getPersonaDetails(persona: Persona): string[] {
        return [
            `Nombre: ${persona.Nombre}`,
            `Apellidos: ${persona.Apellidos}`,
            'Email: aquí iría el mail'
        ];
    }
    
    public getPersonaFullName(persona: Persona): string {
        return `${persona.Nombre} ${persona.Apellidos}`;
    }
}