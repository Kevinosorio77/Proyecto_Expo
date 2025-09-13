import { Image, Platform, StatusBar, StyleSheet, View, SafeAreaView, Text, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const FormularioV2 = () => {
  return (
    <SafeAreaView style={styles.mainS}>
      <ScrollView>
        <Text style={styles.title}>Formulario</Text>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.avatar}
          />
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
    marginBottom: 20,
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
});
