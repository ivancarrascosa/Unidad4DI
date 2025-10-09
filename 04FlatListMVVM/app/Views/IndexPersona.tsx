import { Text, View, FlatList } from "react-native";
import { IndexVM } from "../ViewModels/IndexVM";
import { RepositoryPersona } from "../Models/Data/RepositoryPersona";


export default function IndexPersona() {
  return (
    <FlatList
      data = {IndexVM.getPersonas()}
      keyExtractor={(persona) => persona.id.toString()}
      renderItem = {({item}) => (
        <View>
          <Text>{item.Nombre} {item.Apellidos}</Text>
        </View>
      )}>
        
      </FlatList>
  );
}
