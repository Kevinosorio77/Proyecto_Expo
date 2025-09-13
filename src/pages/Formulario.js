
import {Platform,StatusBar, StyleSheet, View ,SafeAreaView,Text,TextInput}from "react-native"

export const Formulario = () => {

    return (
     <SafeAreaView style={styles.mainS}>
<Text>Nombre</Text>
<TextInput placeholder="escribe tu nombre"/>
     </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  mainS: {
      flex: 1,
      backgroundColor: "#32aa44",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44,
      padding: 16,
    },
})