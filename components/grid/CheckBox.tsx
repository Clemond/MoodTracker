import { StyleSheet, TouchableOpacity } from "react-native";

export default function CheckBox() {
  return <TouchableOpacity style={styles.checkboxContainer}></TouchableOpacity>;
}

const styles = StyleSheet.create({
  checkboxContainer: {
    padding: 20,
    borderWidth: 1,
    width: 50,
    height: 50
  }
});
