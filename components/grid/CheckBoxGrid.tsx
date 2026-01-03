import { View, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "./CheckBox";

export default function CheckBoxGrid() {
  function renderRow() {
    return (
      <View style={styles.CheckBoxRow}>
        {Array.from({ length: 30 }, (_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => console.log("Pressed day ", i + 1)}
          >
            <CheckBox key={i} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.CheckBoxGridContainer}>
      <View style={styles.CheckBoxRow}>{renderRow()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxGridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  CheckBoxRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "95%",
    flexWrap: "wrap",
    gap: 2
  }
});
