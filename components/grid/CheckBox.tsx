import { StyleSheet, View } from "react-native";

export default function CheckBox() {
  return <View style={styles.checkboxContainer}></View>;
}

const styles = StyleSheet.create({
  checkboxContainer: {
    padding: 20,
    borderWidth: 1,
    width: 50,
    height: 50
  }
});
