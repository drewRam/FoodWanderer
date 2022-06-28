import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/*
    Results Detail gets the image and renders it onto the screen
*/
const ResultsDetail = ({ result }) => {
    console.log("entered result detail");
    return(
        <View>
            <Image
                style={styles.image}
                source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      borderRadius: 4,  
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;