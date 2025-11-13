import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType
} from "react-native";

export default function MoodButton({
  feeling,
  icon
}: {
  feeling: string;
  icon: ImageSourcePropType;
}) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 24, height: 24 }} source={icon} />
      <Text style={styles.text}>{feeling}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#465DB1",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    width: 100,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});
