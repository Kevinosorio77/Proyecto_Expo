import { View, Text, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import CardBasico from "../components/CardBasico";
import CardImg from "../components/CardImg";
import CardV2 from "../components/CardV2";
import CardV3 from "../components/CardV3";

export default function HomePrincipal() {
  return (
    <ScrollView>
      <View style={styles.mainS}>
        <Text style={styles.title}>Página principal</Text>
        <CardBasico />
        <CardImg />
        <CardV2 />
        <CardV3 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#32aa44",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});
