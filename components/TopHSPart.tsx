import { View, StyleSheet, Text } from "react-native";
import MoodButton from "./moodButton";

export default function TopHSPart() {
  return (
    <View style={styles.topPart}>
      <Text style={styles.topText}>Welcome!</Text>
      <Text style={styles.bottomText}>How are we feeling today?</Text>
      <View style={styles.moodBtnsContainer}>
        <MoodButton feeling={"Happy"} icon={require("../assets/happy.png")} />
        <MoodButton feeling={"Angry"} icon={require("../assets/angry.png")} />
        <MoodButton feeling={"Sad"} icon={require("../assets/sad.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  bottomText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 10
  },
  moodBtnsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  }
});
