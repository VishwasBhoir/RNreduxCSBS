import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.textStyle}>Products</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  mainContainerStyle: {
    backgroundColor: "#00C4FF",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  textStyle: {
    fontSize: 30,
    padding: 10,
    color: "white",
  },
});
