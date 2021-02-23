import React from 'react'
import { colors } from '../utils/colors'
import { View, Text, StyleSheet } from 'react-native'

const { PRIMARY_COLOR, SECONDARY_COLOR, TRI_COLOR } = colors

export default function DetailCard({Icon, title, text}) {
    /* Reusable Detail card for bottom scrollbar */

    return (
        <View style={styles.detailsBox}>
            <Icon />
            <View style={styles.detailText}>
                <Text style={styles.detailTitle}>{title}</Text>
                <Text style={styles.detailText}>{text}</Text> 
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    detailsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: TRI_COLOR,
        borderRadius: 10,
        margin: 6,
        shadowColor: SECONDARY_COLOR,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    detailText: {
        marginLeft: 10,
        textAlign: 'right',
        color: PRIMARY_COLOR,
    },
    detailTitle: {
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        marginLeft: 10,
        textAlign: 'right',
    }

})