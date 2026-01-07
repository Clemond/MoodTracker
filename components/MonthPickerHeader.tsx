import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useCurrentDateStore } from "../stores/useCurrentDateStore";
import { useEffect, useState } from "react";

export default function MonthPickerHeader() {
  const { currentDate, setUserPickedMonth, userPickedMonth } =
    useCurrentDateStore();

  const currentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + userPickedMonth
  ).toLocaleString("default", {
    month: "long"
  });

  const currentYear = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + userPickedMonth
  ).getFullYear();

  const [displayedMonth, setDisplayedMonth] = useState<string>(currentMonth);

  useEffect(() => {
    setDisplayedMonth(currentMonth);
  }, [userPickedMonth]);

  return (
    <View>
      <View style={styles.monthHeader}>
        <TouchableOpacity
          onPress={() => setUserPickedMonth(userPickedMonth - 1)}
        >
          <Icon source={"chevron-left"} size={30} />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.monthText}>{displayedMonth}</Text>
          <Text style={styles.yearText}>{currentYear}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setUserPickedMonth(userPickedMonth + 1)}
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
    justifyContent: "space-around",
    alignItems: "center"
  },
  textWrapper: {
    flexDirection: "column",
    alignItems: "center"
  },
  monthText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  yearText: {
    fontSize: 16,
    color: "gray"
  }
});
