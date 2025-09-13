import { View, Text, StyleSheet } from "react-native";

export default function CardBasico() {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Título del Card</Text>
      <Text style={styles.contenido}>Contenido del Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contenido: {
    marginTop: 4,
  },
});

