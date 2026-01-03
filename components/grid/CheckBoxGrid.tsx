import { View, StyleSheet } from "react-native";
import CheckBox from "./CheckBox";

export default function CheckBoxGrid() {
  function renderRow() {
    return (
      <View style={styles.CheckBoxRow}>
        {Array.from({ length: 6 }, (_, i) => (
          <CheckBox key={i} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.CheckBoxGridContainer}>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxGridContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  CheckBoxRow: {
    flexDirection: "row"
  }
});
