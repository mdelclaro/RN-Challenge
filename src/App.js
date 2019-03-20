import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Imagens from "./screens/Imagens";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Imagens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
