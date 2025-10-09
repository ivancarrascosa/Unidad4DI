import { RepositoryPersona } from "../Models/Data/RepositoryPersona";
export class IndexVM {
    private personas = RepositoryPersona.Personas
    public static getPersonas() {
        return RepositoryPersona.Personas
    }
}