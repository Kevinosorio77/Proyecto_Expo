import { Platform, StatusBar, StyleSheet, SafeAreaView, Text,view } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export const ListaAlumnos = () => {
  return (
    <SafeAreaView style={styles.mainS}>


    <view style={style.appBar}>
        <Icon name="arrow-left" size={20} color={"#000"}/>
<Text style={style.appBarTitle}>Lista de usuarios</Text>
<view style={{width:20}}></view>
    </view>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#32aa44",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44,
    //padding: 16,
  },
    appBar:{
        height:56,
        width:"100%",
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:16,
    },
    appBarTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000",
    }
});
