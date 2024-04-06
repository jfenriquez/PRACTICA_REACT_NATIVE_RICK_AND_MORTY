import { StyleSheet, useColorScheme } from "react-native";

export const styles = StyleSheet.create({
  globalMargin: { margin: 2 ,padding: 10},
  globalTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    padding: 2,
       
  },
  globalSubTitle: {
    //fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 2,       
  },
  botonGrande: {
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: "#5856D6",
    justifyContent: "center",
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 25,
    backgroundColor: "gray",
  },
  switchOn: {
    backgroundColor: "red",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  ///sin utilizar
  marcaDeAgua: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
});
