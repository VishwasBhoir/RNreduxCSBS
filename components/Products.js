import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Products = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.textStyle}>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  mainContainerStyle: {
    backgroundColor: "#00C4FF",
  },

  textStyle: {
    fontSize: 30,
  },
});
