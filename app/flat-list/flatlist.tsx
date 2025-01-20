import { useRouter } from "expo-router"
import { View, Button} from "react-native"
import { StyleSheet } from "react-native-unistyles"

const FlatListScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Button title="Go to FlatList Screen" onPress={() => router.push("/FlatList/1")}/>
    </View>
  )
}

export default FlatListScreen

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.systemBackground.primary,
  },
  loadingItem: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
}))