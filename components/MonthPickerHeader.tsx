import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useCurrentDateStore } from "../stores/useCurrentDateStore";
import { useEffect, useState } from "react";

export default function MonthPickerHeader() {
  const { currentDate } = useCurrentDateStore();
  const [userChoiceMonth, setUserChoiceMonth] = useState<number>(0);
  const currentMonthString = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + userChoiceMonth
  ).toLocaleString("default", {
    month: "long"
  });

  const [displayedMonth, setDisplayedMonth] =
    useState<string>(currentMonthString);

  useEffect(() => {
    setDisplayedMonth(currentMonthString);
  }, [userChoiceMonth]);

  // * This code block will go in the grid files later *

  const currentMonthInt =
    parseInt(
      currentDate.toLocaleString("default", {
        month: "numeric"
      })
    ) + userChoiceMonth;

  const totalDaysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonthInt,
    0
  ).getDate();
  //* End of code block *

  return (
    <View>
      <View style={styles.monthHeader}>
        <TouchableOpacity
          onPress={() => setUserChoiceMonth(userChoiceMonth - 1)}
        >
          <Icon source={"chevron-left"} size={30} />
        </TouchableOpacity>
        <Text style={styles.monthText}>{displayedMonth}</Text>
        <TouchableOpacity
          onPress={() => setUserChoiceMonth(userChoiceMonth + 1)}
        >
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
