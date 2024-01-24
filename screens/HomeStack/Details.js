import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text,SafeAreaView, StyleSheet, View} from 'react-native';
import PageStyles from '../../styles/PageStyles';

const Details = () => {
    const {params: {name, age}} = useRoute();

    return (
        <View style={PageStyles.page}>
            <Text>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Details;
