import { IMoodButton } from "../types/IMoodButton";

export const listOfMoods: IMoodButton[] = [
  { id: 1, feeling: "Happy", icon: require("../assets/happy.png") },
  { id: 2, feeling: "Angry", icon: require("../assets/angry.png") },
  { id: 3, feeling: "Sad", icon: require("../assets/sad.png") },
  { id: 4, feeling: "Anxious", icon: require("../assets/anxious.png") },
  { id: 5, feeling: "Depressed", icon: require("../assets/depressed.png") },
  { id: 6, feeling: "Embarrassed", icon: require("../assets/embarrassed.png") }
];
