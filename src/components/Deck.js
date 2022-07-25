import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Animated,
    StyleSheet,
    PanResponder,
    Dimensions
    } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = ({results, renderCard}) => {
    const [current, setCurrent] = useState(0);
    const [position, setPosition] = useState(new Animated.ValueXY());
    const [panResponder, setPanResponder] = useState(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            //debugger;
            position.setValue({ x: gesture.dx, y: gesture.dy});

            // add gesture threshold here as well for visual representation
            // towards the right or left for the user
        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD)
                forceSwipe("right"); // animates the card off the screen
            else if( gesture.dx < -SWIPE_THRESHOLD)
                forceSwipe("left");
            else
                resetPosition();
        },
    }));

    // Similar to componentDidMount and componentDidUpdate to follow documentation: 
    useEffect(() => {
        setPanResponder(panResponder);
        setPosition(position);
    }, []);

    const forceSwipe = (direction) => {
        const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: false,
        }).start(() => onSwipeComplete(direction));
    }

    const onSwipeComplete = (direction) => {
        //const { onSwipeLeft, onSwipeRight } = props;
        //const item = results[current];
        
        //direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        position.setValue({x: 0, y: 0});
        setCurrent((previousIndex) => previousIndex + 1); // Not modifying the existing value (index++), but reseting it through the use of state
    };

    /**
     * Resets position to default values of Animated.ValueXY
     */
    const resetPosition = () => {
        Animated.spring(position, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
        }).start();
    }

    /*
    * Creates an interpolate object to be used as a style by Animated.View
    * @return position by spread to get the first object in the array
    */
    const getCardStyle = () => {
        const rotatePosX = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],   // Amount that the card has been dragged on screen
            outputRange: ['-120deg', '0deg', '120deg']                  // Amount that the should be rotating to
        });

        return ({
            ...position.getLayout(),
            transform: [{ rotate: rotatePosX }],
        });
    }

    /**
    * Creates a map of our results from our Selection Screen recieved from our yelp api.
    */
    const renderCards = () => {
        {
            return results.map((item, index) => {
                if(index < current) { return null; }
                if(index === current) {
                    return (
                        <Animated.View
                            key={item.id}
                            style={getCardStyle()}
                            {...panResponder.panHandlers}
                        >
                            {renderCard(item)}
                        </Animated.View>
                    );
                }

                //return renderCard(item);
            });
        }
    }

    return (
        <View>
            {renderCards()}
        </View>
    );
}

const styles = StyleSheet.create({});

export default Deck;