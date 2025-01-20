import { View, Text } from "react-native"
import { StyleSheet } from "react-native-unistyles"

const ListItem = ({ item }) => {
  return (
    <View
      style={styles.item}
    >
      <Text style={styles.text}>Item {item}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create((theme) => ({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    color: theme.colors.label.primary,
  }
}))