import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  // Common
  title: {
    fontSize: 64,
    textAlign: "center",
    marginTop: 30
  },
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center"
  },
});

export default styles;