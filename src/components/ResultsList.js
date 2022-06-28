import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Deck from "./Deck";
import { Card, Button, Image } from '@rneui/base';

// reusable component that shows a list of results we got from the yelp api
const ResultsList = ({ results }) => {
    //console.log(results.length);

    const renderCard = (item) =>{
        return(
            <Card key={item.id}>
                <Card.Image style={styles.image} source={{ uri: item.image_url }}  resizeMode="cover"/>
                <Text style={{marginBottom: 15}}>
                    I can customize even more...
                </Text>
            </Card>
        );
    }

    return (
        <View>
            <Deck
                results={results}
                renderCard={renderCard}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        borderRadius: 4,  
      }
});

export default ResultsList;