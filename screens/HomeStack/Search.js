import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, } from 'react-native';
import {PageStyles, LoginPage, Typography, Utilities} from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import Button2 from '../../components/Button2';
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const Search = () => {
    const bottomTabBarHeight = useBottomTabBarHeight();
    const {navigate} = useNavigation();
    return (
        <SafeAreaView style={[PageStyles.pageNoHeader, {paddingBottom: bottomTabBarHeight}]}>
          <Text>Search</Text>
          <Text>Nothing to see here!</Text>
          <Text>Search</Text>   
        </SafeAreaView>
    );
}



export default Search;
