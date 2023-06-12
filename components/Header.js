import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>0</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    height: 80,
    backgroundColor: "#191825",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  textStyles: {
    fontSize: 50,
    color: "white",
    alignSelf: "flex-end",
    marginRight: 30,
  },
});
