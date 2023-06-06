import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 10,
  },
});
