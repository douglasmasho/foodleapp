import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text,SafeAreaView, StyleSheet, View} from 'react-native';
import PageStyles from '../../styles/PageStyles';

const Graph = () => {
    const {params: {name, age}} = useRoute();

    return (
        <View style={PageStyles.page}>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Graph</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Graph;
