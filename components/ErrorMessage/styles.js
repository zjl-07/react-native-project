import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 60,
    alignItems: "center",
  },
  text: {
    marginTop: 30,
    textAlign: "center",
    color: color.tomato,
  },
});
