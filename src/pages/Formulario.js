import { Platform, StatusBar, StyleSheet, View, SafeAreaView, Text, TextInput } from "react-native";

export const Formulario = () => {
  return (
    <SafeAreaView style={styles.mainS}>
        <Text style={styles.title}> Registro del Alumno</Text>

      <Text style={styles.label}>Descripción</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder="Describe tu personalidad" />

      <Text style={styles.label}>carrera</Text>
      <TextInput editable={true} style={styles.input} placeholder="Escribe tu carrera" />

      <Text style={styles.label}>Nombre</Text>
      <TextInput multiline={true} numberOfLines={4} style={styles.input} placeholder="Escribe tu nombre" />

      <Text style={styles.label}>Correo Electrico</Text>
      <TextInput style={styles.input} placeholder="Ingresa el correo" keyboardType="email-address" />

<Text style={styles.label}>Contrasena</Text>
      <TextInput style={styles.input} placeholder="*****" secureTextEntry />

      <Text style={styles.label}>Telefono</Text>
      <TextInput style={styles.input} placeholder="123456" keyboardType="phone-pad"/>
      
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
marginBottom: 20,
textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
