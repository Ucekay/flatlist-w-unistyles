import { useRouter } from "expo-router"
import { useState, useEffect } from "react"
import { View, FlatList, ActivityIndicator, Pressable, Text, Button} from "react-native"
import { StyleSheet } from "react-native-unistyles"

const FlatListScreen = () => {
  const router = useRouter()
  const data = Array.from({ length: 100 }, (_, i) => i)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>
      {isPending ? (
        <FlatList
          data={data.slice(0, 10)}
          renderItem={({ item }) => (
            <View style={styles.loadingItem}>
              <ActivityIndicator />
            </View>
          )}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={styles.item}
              onPress={() => router.push(`/FlatList/${item}`)}
            >
              <Text>Item {item}</Text>
            </Pressable>
          )}
        />
      )}
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