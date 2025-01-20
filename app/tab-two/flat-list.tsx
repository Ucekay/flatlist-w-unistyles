import { FlatList, Text, View } from "react-native"
import {StyleSheet} from "react-native-unistyles"

const FlatListScreen = () => {
  const data = Array.from({ length: 100 }, (_, i) => i)
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>Item {item}</Text>
        </View>
      )}
      keyExtractor={(item) => item.toString()}
    />
  )
}

export default FlatListScreen

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
})

