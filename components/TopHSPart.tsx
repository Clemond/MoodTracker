import { View, StyleSheet, Text } from "react-native";
import MoodButton from "./moodButton";
import { listOfMoods } from "../constants/listOfMoods";

export default function TopHSPart() {
  return (
    <View style={styles.topPart}>
      <Text style={styles.topText}>Welcome!</Text>
      <Text style={styles.bottomText}>How are we feeling today?</Text>
      <View style={styles.moodBtnsContainer}>
        {listOfMoods.map((mood) => (
          <MoodButton
            key={mood.id}
            id={mood.id}
            feeling={mood.feeling}
            icon={mood.icon}
          />
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
