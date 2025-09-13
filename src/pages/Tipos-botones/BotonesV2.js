import { Text, StyleSheet, View, Platform, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotonesV2() {
  return (
    <View style={styles.mainS}>
      <Text style={styles.h1}>Botones</Text>

      {/* Botón básico */}
      <TouchableOpacity style={styles.botonBasico}>
        <Icon name="check" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Botón Básico</Text>
      </TouchableOpacity>

      {/* Botón secundario */}
      <TouchableOpacity style={styles.botonSecundario}>
        <Icon name="times" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Botón Secundario</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#32aa44ff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#fff",
  },
  botonBasico: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  botonSecundario: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});
