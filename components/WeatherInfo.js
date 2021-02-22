import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../utils/index'
/* import { getIconForWeather } from '../utils/IconUtils'
 */
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({currentWeather}) {
    console.log(currentWeather)
    const {
        main: { temp },
        weather: [{icon, main, description }],
        name,
        timezone,
    } = currentWeather

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    
    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image source={{ uri: iconUrl }} style={styles.weatherIcon}/>
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDesc}>{description}</Text>
            <Text>{timezone}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherIcon: {
        width: 120,
        height: 120,
    },
    weatherDesc: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    },
    textPrimary: {
        fontSize: 30,
        color: PRIMARY_COLOR,
    },
})
