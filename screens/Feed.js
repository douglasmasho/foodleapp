import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, } from 'react-native';
import {PageStyles, LoginPage, Typography, Utilities} from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import Button2 from '../components/Button2';
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const Feed = () => {
    const bottomTabBarHeight = useBottomTabBarHeight();
    const {navigate} = useNavigation();
    return (
        <View style={[PageStyles.page, {paddingBottom: bottomTabBarHeight}]}>
            <Button2 text={"Go To Details"} onPress={()=>{navigate("Details", {name: "Douglas", age: 22})}}/>
            <Button2 text={"Go To Details"}/>
        </View>
    );
}



export default Feed;
