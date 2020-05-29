import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightgrey,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
