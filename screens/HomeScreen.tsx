import { View, Text, StyleSheet } from "react-native";
import BottomHSPart from "../components/BottomHSPart";
import TopHSPart from "../components/TopHSPart";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopHSPart />
      <BottomHSPart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});
