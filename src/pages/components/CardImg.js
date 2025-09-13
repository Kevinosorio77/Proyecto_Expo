import { Image, View, Text, StyleSheet } from "react-native";

export default function CardImg() {
  return (
    <View style={styles.card}>
      <Image style={styles.img}  source={{ uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png' }} />
      <Text style={styles.titulo}>Card con img</Text>
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
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  contenido: {
    marginTop: 4,
  },
  img: {
    width: 100,  // ✅ número, no string
    height: 150,
    borderRadius: 10,
  }
});
