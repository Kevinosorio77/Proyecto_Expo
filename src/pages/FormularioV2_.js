import { Image, Platform, StatusBar, StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

export const FormularioV2 = () => {
  return (
    <SafeAreaView style={styles.mainS}>
      <ScrollView>
        <Text style={styles.title}>Formulario</Text>
        <View style={styles.container}>

          <TouchableOpacity style={styles.cerrarBoton}>
            <Icon name="close" size={20} color={"#000"} />
          </TouchableOpacity>

          <Image 
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
            style={styles.avatar} 
          />
          <Text style={styles.name}>Kevin Andrew</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Carrera</Text>
            <Text style={styles.name}>Sistemas</Text>

            <Text style={styles.label}>Especialidad</Text>
            <Text style={styles.name}>Desarrollo móvil</Text>

            <Text style={styles.label}>Correo</Text>
            <Text style={styles.name}>andrewosorio89@gmail.com</Text>

            <Text style={styles.label}>Teléfono</Text>
            <Text style={styles.info}>099999</Text>

            <Text style={styles.label}>Número de control</Text>
            <Text style={styles.info}>22620118</Text>
          </View>

          <TouchableOpacity style={styles.botonBasico}>
            <Icon name="save" size={20} color="#fff" />
            <Text style={styles.text}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#32aa44",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#fff",
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#32aa44",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: "#959e51ff",
    padding: 8,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
    padding: 8,
  },
  botonBasico: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 16,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  cerrarBoton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    borderRadius: 15,
    backgroundColor: "#9c2020ff",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
