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
      id: "1",
      name: "Samsung S22",
      color: "White",
      price: "59,999.00",
      imgURI: "./assets/img/SamsungS21.png",
    },
    {
      id: "2",
      name: "Iphone 14",
      color: "Black",
      price: "89,000.00",
      imgURI: "./assets/img/Iphone.png",
    },
    {
      id: "3",
      name: "OnePlus",
      color: "White",
      price: "62,990.00",
      imgURI: "./assets/img/OnePlus.png",
    },
  ];

  const Item = ({ name, color, price, imgURI }) => (
    <View style={{}}>
      <Image
        style={{ height: 200, width: 200 }}
        source={require("./assets/img/OnePlus.png")}
      />
      <Text>{name}</Text>
      <Text>{color}</Text>
      <Text>{price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Item name={item.name} color={item.color} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
        />
        <Product />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    margin: 5,
  },
});
