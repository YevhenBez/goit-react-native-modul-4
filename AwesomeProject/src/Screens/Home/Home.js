import { headerScreensStyles } from "../../defaultStyles/headerScreensStyles";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "../PostsScreen/PostsScreen";

import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <Tabs.Navigator
            initialRouteName="PostsScreen"
      
        >
            <Tabs.Screen
                name="PostsScreen"
                component={PostsScreen}
        
            />
            <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",

           ...headerScreensStyles,
        
          tabBarStyle: { display: "none" },
        }}
      />
                  
      
        </Tabs.Navigator>
    );
};

export default Home;