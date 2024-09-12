import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RectangleImageContainer from './RectangleImageContainer';
import SquareImageContainer from './SquareImageContainer';

type AsymmetricImageGridProps = {
    images: string[];
};

const AsymmetricImageGrid = ({ images }: AsymmetricImageGridProps) => {
    if (!images || images.length < 4) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Invalid source data!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {images.map((imageUrl, index) => {
                    if (index % 4 === 0) {
                        return <RectangleImageContainer key={index} imageUrl={imageUrl} />;
                    } else if (index % 4 === 2) {
                        return <SquareImageContainer key={index} imageUrl={imageUrl} />;
                    }
                    return null;
                })}
            </View>

            <View style={styles.rightContainer}>
                {images.map((imageUrl, index) => {
                    if (index % 4 === 1) {
                        return <SquareImageContainer key={index} imageUrl={imageUrl} />;
                    } else if (index % 4 === 3) {
                        return <RectangleImageContainer key={index} imageUrl={imageUrl} />;
                    }
                    return null;
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});

export default AsymmetricImageGrid;
