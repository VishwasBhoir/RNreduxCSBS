import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {
  const products = [
    {
      key: "1",
      name: "Samsung S22",
      color: "White",
      price: "59,999.00",
      imgURI: require("./assets/img/SamsungS21.png"),
    },
    {
      key: "2",
      name: "Iphone 14",
      color: "Black",
      price: "89,000.00",
      imgURI: require("./assets/img/Iphone.png"),
    },
    {
      key: "3",
      name: "OnePlus",
      color: "White",
      price: "62,990.00",
      imgURI: require("./assets/img/OnePlus.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Product products={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
    // margin: 5,
    flex: 1,
  },
});
