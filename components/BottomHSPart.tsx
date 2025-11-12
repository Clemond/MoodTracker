import { View, StyleSheet, Text } from "react-native";

export default function BottomHSPart() {
  return <View style={styles.bottomPart}></View>;
}

const styles = StyleSheet.create({
  bottomPart: {
    backgroundColor: "#F9F6F1",
    paddingVertical: "50%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  }
});
