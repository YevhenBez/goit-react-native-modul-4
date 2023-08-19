import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "../PostsScreen/PostsScreen";

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
                  
      
        </Tabs.Navigator>
    );
};

export default Home;