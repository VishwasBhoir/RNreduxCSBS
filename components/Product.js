import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { addToCart } from "./redux/action";

const Product = (props) => {
  // const useDispatch = useDispatch();
  console.log(item);

  const handleAddToCart = (item) => {
    console.warn("hiii...", item);
  };

  const item = props.products;
  const Item = ({ name, color, price, imgURI }) => (
    <View style={styles.itemStyle}>
      <Image style={{ height: 80, width: 80 }} source={imgURI} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.itemTextContainerStyle}>
          <Text style={styles.textStyle}>{name}</Text>
          <Text style={styles.textStyle}>{color}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>{price}</Text>
          <Button onPress={() => handleAddToCart(item)} title="Add To Cart" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainerStyle}>
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <Item
            imgURI={item.imgURI}
            name={item.name}
            color={item.color}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  mainContainerStyle: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#E384FF",
    paddingBottom: 10,
  },

  itemStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: "#865DFF",
    borderRadius: 10,
  },

  textStyle: {
    fontSize: 20,
    color: "white",
  },
});
