import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

//search bar until button implimentations
const Filter = ({ term, onTermChange, onTermSubmit }) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyles} />
            <TextInput
                style={styles.inputSyle}    
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit} //gets to search after hitting enter
            />
        </View>);
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputSyle:{
        flex: 1,
        fontSize: 18,
    },
    iconStyles: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default Filter;