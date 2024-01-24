import {NavigationContainer} from "@react-navigation/native";
import Feed from "./screens/Feed";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Add from "./screens/Add";
import Settings from "./screens/Settings";
import { SimpleLineIcons, AntDesign, MaterialCommunityIcons, Feather, Ionicons, Entypo } from '@expo/vector-icons'; 
import Colors from "./styles/Colors";
import Details from "./screens/HomeStack/Details";
import Search from "./screens/HomeStack/Search";
import Graph from "./screens/HomeStack/Graph";
import ASearch from "./screens/AnalyzeStack/ASearch";
import AGraph from "./screens/AnalyzeStack/AGraph";

//Stack


const HomeStack = createNativeStackNavigator();

const HomeStackGroup = ()=>{
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={Search}/>
            <HomeStack.Screen name="Details" component={Details}/>
            <HomeStack.Screen name="Graph" component={Graph}/>
        </HomeStack.Navigator>
    )
}

//Stack
const AnalyzeStack = createNativeStackNavigator();

const AnalyzeStackGroup = ()=>{
    return (
        <AnalyzeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AnalyzeStack.Screen name="Search" component={ASearch}/>
            <AnalyzeStack.Screen name="Graph" component={AGraph}/>
        </AnalyzeStack.Navigator>
    )
}
//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup(){
    return (
        <Tab.Navigator
        screenOptions={({route, navigation})=>({
            tabBarStyle: {
                position: "absolute",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: 55,
                paddingTop:10,
                backgroundColor: Colors.bgGray
            },
            tabBarIcon: ({color, focused, size})=>{

                switch(route.name){
                    case "Home": 
                    return <Ionicons name="search" size={25} color={color} />
                    case "Analyze":
                    return <Entypo name="bar-graph" size={25} color={color} />
                    default:
                }
                
            },
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.white
            // tabBarBackground: () =>
        })}>
            <Tab.Screen name="Home" component={HomeStackGroup} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="Analyze" component={Add} />
        </Tab.Navigator>
    )
}

export default Navigation = ()=>{
    return (

        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}