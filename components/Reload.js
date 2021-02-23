import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/colors'

/* Reloading button to refresh for latest weather */
export default function Reload({load}) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
            <Ionicons 
                onPress={load}
                style={styles.realoadIcon}
                name={reloadIconName} 
                size={30} 
                color={colors.SECONDARY_COLOR} />
    )
}

const styles = StyleSheet.create({
    realoadIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
})
