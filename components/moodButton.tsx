import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { IMoodButton } from "../types/IMoodButton";

export default function MoodButton({ feeling, icon }: IMoodButton) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={{ width: 24, height: 24 }} source={icon} />
      <Text style={styles.text}>{feeling}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#465DB1",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    paddingVertical: 8,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});
