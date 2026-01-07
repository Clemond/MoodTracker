import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useCurrentDateStore } from "../stores/useCurrentDateStore";
import { useEffect, useState } from "react";

export default function MonthPickerHeader() {
  const { currentDate, setUserPickedMonth, userPickedMonth } =
    useCurrentDateStore();
  const currentMonthString = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + userPickedMonth
  ).toLocaleString("default", {
    month: "long"
  });

  const [displayedMonth, setDisplayedMonth] =
    useState<string>(currentMonthString);

  useEffect(() => {
    setDisplayedMonth(currentMonthString);
  }, [userPickedMonth]);

  return (
    <View>
      <View style={styles.monthHeader}>
        <TouchableOpacity
          onPress={() => setUserPickedMonth(userPickedMonth - 1)}
        >
          <Icon source={"chevron-left"} size={30} />
        </TouchableOpacity>
        <Text style={styles.monthText}>{displayedMonth}</Text>
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
    justifyContent: "space-around"
  },
  monthText: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
