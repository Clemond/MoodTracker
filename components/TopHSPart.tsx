import { View, StyleSheet, Text } from "react-native";
import MoodButton from "./moodButton";
import { IMoodButton } from "../types/IMoodButton";

export default function TopHSPart() {
  const listOfMoods: IMoodButton[] = [
    { feeling: "Happy", icon: require("../assets/happy.png") },
    { feeling: "Angry", icon: require("../assets/angry.png") },
    { feeling: "Sad", icon: require("../assets/sad.png") },
    { feeling: "Anxious", icon: require("../assets/sad.png") },
    { feeling: "Depressed", icon: require("../assets/sad.png") },
    { feeling: "Embarrassed", icon: require("../assets/sad.png") }
  ];

  return (
    <View style={styles.topPart}>
      <Text style={styles.topText}>Welcome!</Text>
      <Text style={styles.bottomText}>How are we feeling today?</Text>
      <View style={styles.moodBtnsContainer}>
        {listOfMoods.map((mood, index) => (
          <MoodButton key={index} feeling={mood.feeling} icon={mood.icon} />
        ))}
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
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  }
});
