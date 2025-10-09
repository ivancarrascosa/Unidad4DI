import { FlatList, Text, View } from "react-native";

const listaPersonas = [
  { id: 1, nombre: "Elena", apellidos: "Alcalde García" },
  { id: 2, nombre: "Luis", apellidos: "Cerrato Vela" },
  { id: 3, nombre: "María", apellidos: "Díaz Fernández" },
  { id: 4, nombre: "Javier", apellidos: "Gómez Pérez" },
  { id: 5, nombre: "Laura", apellidos: "Martínez López" },
  { id: 6, nombre: "Carlos", apellidos: "Sánchez Ruiz" },
  { id: 7, nombre: "Ana", apellidos: "Romero Torres" },
  { id: 8, nombre: "Miguel", apellidos: "Navarro Díaz" },
  { id: 9, nombre: "Lucía", apellidos: "Hernández Rojas" },
  { id: 10,nombre: "David", apellidos: "Castro Medina" },
  { id: 11, nombre: "Sofía", apellidos: "Moreno García" },
  { id: 12, nombre: "Andrés", apellidos: "López Salazar" },
  { id: 13, nombre: "Valeria", apellidos: "Núñez Cabrera" },
  { id: 14, nombre: "Tomás", apellidos: "Blanco Romero" },
  { id: 15, nombre: "Paula", apellidos: "Paredes León" },
  { id: 16, nombre: "Ignacio", apellidos: "Ruiz Herrera" },
  { id: 17, nombre: "Daniela", apellidos: "Santos Molina" },
  { id: 18, nombre: "Hugo", apellidos: "Delgado Cruz" },
  { id: 19, nombre: "Martina", apellidos: "Campos Suárez" },
  { id: 20, nombre: "Emilio", apellidos: "Fernández Bravo" },
  { id: 21, nombre: "Julia", apellidos: "Marín Ortega" },
  { id: 22, nombre: "Rubén", apellidos: "Peña Solís" },
  { id: 23, nombre: "Alicia", apellidos: "Cano Fuentes" },
  { id: 24, nombre: "Santiago", apellidos: "Giménez Rivas" },
  { id: 25, nombre: "Clara", apellidos: "Aguilar Vega" },
  { id: 26, nombre: "Joaquín", apellidos: "Ortiz Méndez" },
  { id: 27, nombre: "Natalia", apellidos: "Carrasco Nieto" },
  { id: 28, nombre: "Marco", apellidos: "Gallardo Rubio" },
  { id: 29, nombre: "Noa", apellidos: "Serrano Cordero" },
  { id: 30, nombre: "Álvaro", apellidos: "Esteban Domínguez" },
  { id: 31, nombre: "Irene", apellidos: "Ramos Gil" },
  { id: 32, nombre: "Mario", apellidos: "Silva Arias" },
  { id: 33, nombre: "Lola", apellidos: "Mora Lozano" },
  { id: 34, nombre: "Bruno", apellidos: "Vargas Dávila" },
  { id: 35, nombre: "Adriana", apellidos: "Reyes Pascual" },
  { id: 36, nombre: "Cristian", apellidos: "Cuenca Pons" },
  { id: 37, nombre: "Eva", apellidos: "Bueno Peralta" },
  { id: 38, nombre: "Samuel", apellidos: "Roldán Bernal" },
  { id: 39, nombre: "Gabriela", apellidos: "Camacho Salas" },
  { id: 40, nombre: "Esteban", apellidos: "Benítez Torres" },
  { id: 41, nombre: "Inés", apellidos: "Soto Calderón" },
  { id: 42, nombre: "Fernando", apellidos: "Iglesias Rosas" },
  { id: 43, nombre: "Victoria", apellidos: "Aranda Lázaro" },
  { id: 44, nombre: "Rodrigo", apellidos: "Gallego Morillo" },
  { id: 45, nombre: "Carmen", apellidos: "Solano Ferrer" },
  { id: 46, nombre: "Gonzalo", apellidos: "Alonso Vidal" },
  { id: 47, nombre: "Elisa", apellidos: "Martos Casado" },
  { id: 48, nombre: "Óscar", apellidos: "Del Valle Cuesta" },
  { id: 49, nombre: "Nerea", apellidos: "Garrido Lozano" },
  { id: 50, nombre: "Lucas", apellidos: "Castaño Arenas" },
  { id: 51, nombre: "Ángela", apellidos: "Prado Guzmán" },
  { id: 52, nombre: "Mateo", apellidos: "Redondo Pastor" },
  { id: 53, nombre: "Claudia", apellidos: "Román Sevilla" },
  { id: 54, nombre: "Alonso", apellidos: "Del Río Salmerón" },
  { id: 55, nombre: "Beatriz", apellidos: "Navarrete Galán" },
  { id: 56, nombre: "Julián", apellidos: "Villar Paredes" },
  { id: 57, nombre: "Lorena", apellidos: "Sáez Aguado" },
  { id: 58, nombre: "Iván", apellidos: "Crespo Hidalgo" },
  { id: 59, nombre: "Teresa", apellidos: "Vallejo Redondo" },
  { id: 60, nombre: "Marcos", apellidos: "Cabrera Montoro" }
]
export default function Index() {
  return (
      <FlatList
      data = {listaPersonas}
      keyExtractor={(item) => item.id.toString()}
      renderItem = {({item}) => (
        <View>
          <Text>{item.nombre} {item.apellidos}</Text>
        </View>
      )}>
        
      </FlatList>
  );
}
