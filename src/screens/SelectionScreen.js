import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Filter from '../components/Filter'; // is my 'search bar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


// Parent compenent aka searchScreen
const SelectionScreen = ({ navigation }) =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const people = navigation.getParam("people"); // Gets amount of people from HomeScreen after button submits
    
    /** 
     * Filters results by price
     * will change later based on other options of the user as requested
    */
    const filterResultsByPrice = (price) => {
        /// price === '$' || '$$' || '$$$'
        
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <View>
            <Filter 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we have found { results.length } results</Text>
            <ResultsList results={filterResultsByPrice('$$')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SelectionScreen;