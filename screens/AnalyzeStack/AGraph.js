import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, } from 'react-native';
import {PageStyles, LoginPage, Typography, Utilities} from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import Button2 from '../../components/Button2';
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const AGraph = () => {
    const bottomTabBarHeight = useBottomTabBarHeight();
    const {navigate} = useNavigation();
    return (
        <View style={[PageStyles.page, {paddingBottom: bottomTabBarHeight}]}>
          <Text>Search</Text>
          <Text>Nothing to see here!</Text>
          <Text>Search</Text>   
        </View>
    );
}



export default AGraph;
