import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RectangleImageContainer = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 10,
    },
    image: {
        width: screenWidth / 2 - 15,
        height: 280,
        borderRadius: 10,
    },
});

export default RectangleImageContainer;
