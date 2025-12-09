import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

export default function MonthPickerHeader() {
  return (
    <View>
      <View style={styles.monthHeader}>
        <TouchableOpacity>
          <Icon source={"chevron-left"} size={30} />
        </TouchableOpacity>
        <Text style={styles.monthText}>December</Text>
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
