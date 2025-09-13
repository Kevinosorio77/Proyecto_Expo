import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardV3() {
  return (
    <View style={styles.card}>
      <Image 
        style={styles.img}  
        source={{ uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png' }} 
      />

      <View style={styles.card_contenido}>
        <Text style={styles.titulo}>Card con img</Text>
        <Text style={styles.contenido}>Butpons</Text>

        <TouchableOpacity style={styles.botonSecundario}>
          <Text style={styles.textoBoton}>Botón Secundario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4d4fcdff",
    marginVertical: 10,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
  },
  card_contenido: {
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  contenido: {
    marginBottom: 12,
    fontSize: 12,
    color: "#333",
  },
  img: {
    width: 100,
    height: 150,
  },
  botonSecundario: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  textoBoton: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
