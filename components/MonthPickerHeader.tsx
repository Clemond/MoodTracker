import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useCurrentDateStore } from "../stores/useCurrentDateStore";

export default function MonthPickerHeader() {
  const { currentDate } = useCurrentDateStore();
  const currentMonthString = currentDate.toLocaleString("default", {
    month: "long"
  });
  const currentMonthInt = parseInt(
    currentDate.toLocaleString("default", {
      month: "numeric"
    })
  );

  const totalDaysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonthInt,
    0
  ).getDate();

  return (
    <View>
      <View style={styles.monthHeader}>
        <TouchableOpacity>
          <Icon source={"chevron-left"} size={30} />
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentMonthString}</Text>
        <TouchableOpacity>
          <Icon source={"chevron-right"} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  monthHeader: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  monthText: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
