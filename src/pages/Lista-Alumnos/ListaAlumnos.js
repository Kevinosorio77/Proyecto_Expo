import { Platform, Image, StatusBar, StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ListaAlumnos = () => {
  return (
    <SafeAreaView style={styles.mainS}>
      <View style={styles.appBar}>
        <Icon name="arrow-left" size={20} color={"#000"} />
        <Text style={styles.appBarTitle}>Lista de usuarios</Text>
        <View style={{ width: 20 }}></View>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <Text style={styles.sectionTitle}>Alumnos de aplicaciones móviles</Text>
        
        <View style={styles.card}>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.avatar}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.userName}>Kevin Andrew</Text>
            <Text style={styles.userDetais}>Inf. Sistemas</Text>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
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
  },
  appBar: {
    height: 56,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  card: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    marginBottom: 6,
  },
  avatar: {
    width: 60,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },
  cardInfo: {},
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userDetais: {
    fontSize: 14,
    color: "gray",
  },
  saveButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#32aa44",
    borderRadius: 6,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
