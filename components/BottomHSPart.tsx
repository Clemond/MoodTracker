import { View, StyleSheet } from "react-native";
import MonthPickerHeader from "./MonthPickerHeader";
import CheckBoxGrid from "./grid/CheckBoxGrid";

export default function BottomHSPart() {
  return (
    <View style={styles.bottomPart}>
      <MonthPickerHeader />
      <CheckBoxGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomPart: {
    backgroundColor: "#F9F6F1",
    height: "50%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  }
});
