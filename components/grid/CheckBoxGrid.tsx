import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
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

  return (
    <View style={styles.CheckBoxGridContainer}>
      <FlatList
        data={Array.from({ length: totalDaysInMonth })}
        numColumns={7}
        contentContainerStyle={{
          justifyContent: "center",
          height: "100%"
        }}
        scrollEnabled={false}
        renderItem={({ index }) => (
          <TouchableOpacity onPress={() => console.log(index + 1)}>
            <CheckBox />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxGridContainer: {
    flex: 1,
    alignItems: "center"
  }
});
