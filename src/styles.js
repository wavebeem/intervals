import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  debugBorder: {
    borderWidth: 0,
    borderColor: "gold"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  flex1: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  timerText: {
    fontSize: 80,
    marginBottom: 20,
    color: "white"
  },
  monospace: {
    fontFamily: Platform.select({
      android: "Roboto",
      ios: "Avenir"
    })
  }
});
