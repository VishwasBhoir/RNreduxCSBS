import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";

const Product = (Props) => {
  const item = Props;
  console.log(item);
  // <View style={styles.mainContainerStyle}>
  //   <Text style={styles.textStyle}>Products</Text>
  // </View>
  const Item = ({ name, color, price, imgURI }) => (
    <View style={{}}>
      <Image style={{ height: 200, width: 200 }} source={imgURI} />
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>{color}</Text>
      <Text style={styles.textStyle}>{price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: "#00C4FF",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  textStyle: {
    fontSize: 30,
    padding: 10,
    color: "black",
  },
});
