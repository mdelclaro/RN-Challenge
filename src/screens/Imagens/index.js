import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import { connect } from "react-redux";

import { getChallenge } from "../../store/actions";

class Imagens extends Component {
  renderItem(item) {
    console.log(item.toString());
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 5,
          justifyContent: "center",
          alignItems: "center"
        }}>
        {/* <Image style={{ flex: 1 }} resizeMode="contain" source={item} /> */}
      </View>
    );
  }

  handleNewImage = async () => {
    const exec = await this.props.onGetImage();
    if (!exec) return;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color: "black", fontSize: 22 }]}>Challenge Andamas</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.imagens}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleNewImage} style={styles.button}>
            <Text style={styles.text}>Baixar nova imagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Alterar Endpoint</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    bottom: 15
  },
  button: {
    flex: 1,
    backgroundColor: "#425cf4",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    // borderRadius: 15,
    // padding: 10
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    imagens: state.imagens.imagens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetImage: () => dispatch(getChallenge())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Imagens);
