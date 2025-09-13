import { Text, StyleSheet, View, Platform, StatusBar, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Botones() {
  return (
    <View style={styles.mainS}>
      <Text style={styles.h1}>Botones</Text>

      <TouchableOpacity style={styles.botonBasico}>
        <Text style={styles.text}>Botón 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonIcono}>
        <Icon name="user" size={20} style={styles.iconB} />
        <Text style={[styles.text, { marginLeft: 8 }]}>Botón Icono</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonIcono}>
        <Text style={styles.text}>siguiente</Text>
        <Icon name="block" size={20} color="#000" style={styles.iconRight} />
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
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  botonBasico: {
    backgroundColor: '#1f7a1fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botonIcono: {
    backgroundColor: '#4d3131ff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconB: {
    color: '#b91f1fff',
  },
  iconRight: {
    marginLeft: 8,
  }
});
