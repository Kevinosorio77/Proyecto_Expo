import { StatusBar } from "expo-status-bar";
import { View, Text,StyleSheet, Platform, StatusBar} from "react-native";

export default function Botones(){
return(
<View style={style.mainS}>

    <Text>Botones</Text>
</View>

);

}
const styles = StyleSheet.create({
mainS:{
    flex:1,
    backgroundColor: '#2e98c5ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    padding:16
}
})