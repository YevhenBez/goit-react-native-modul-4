import { useState} from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import {
  defaultStyles,

} from "../../defaultStyles/defaultStyles.js";

export default function CreatePostsScreen() {

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const [isPhotoTake, setIsPhotoTake] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
            <View style={styles.cameraWrapper}>
              
              
              
            </View>

          <View>
            <TouchableOpacity
            
            >
              <Text style={defaultStyles.greyText}>
                {!isPhotoTake ? "Завантажте фото" : "Редагувати фото"}
              </Text>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View>
              <TextInput
                placeholder="Назва..."
                value={name}
                onChangeText={setName}
                style={defaultStyles.createPublicationInput}
                placeholderTextColor={"#BDBDBD"}
              />

              <TextInput
                placeholder="Місцевість..."
                value={place}
                onChangeText={setPlace}
                style={defaultStyles.createPublicationInput}
                placeholderTextColor={"#BDBDBD"}
              />

              <TouchableOpacity
                
                style={defaultStyles.button}
                              
              >
                <Text
                style={defaultStyles.buttonText}
                >
                  Опублікувати
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },

  cameraWrapper: {
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
  },

});