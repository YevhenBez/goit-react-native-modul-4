import { StyleSheet, ScrollView,  Text} from "react-native";

const PostsScreen = () => {
    return (
        <ScrollView style={styles.container}>
      
            <Text >
                Потом здесь сделаю фотки
            </Text>
      
        </ScrollView>
    );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    },
    });