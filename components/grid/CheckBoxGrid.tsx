import { View, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "./CheckBox";
import { useCurrentDateStore } from "../../stores/useCurrentDateStore";

export default function CheckBoxGrid() {
  const { currentDate, userPickedMonth } = useCurrentDateStore();

  const currentMonthInt =
    parseInt(
      currentDate.toLocaleString("default", {
        month: "numeric"
      })
    ) + userPickedMonth;

  const totalDaysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonthInt,
    0
  ).getDate();

  function renderRow() {
    return (
      <View style={styles.CheckBoxRow}>
        {Array.from({ length: totalDaysInMonth }, (_, i) => (
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
