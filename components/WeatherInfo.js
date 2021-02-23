import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../utils/colors'

const { PRIMARY_COLOR, BLUE_COLOR, TRI_COLOR, } = colors

export default function WeatherInfo({currentWeather}) {
    /* getting current weather data and city */
    const {
        main: { temp },
        weather: [{icon, description }],
        name,
    } = currentWeather

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    const temperature = `${Math.round(temp)}°`;
    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.cityName}>{name}</Text>
            <Image source={{ uri: iconUrl }} style={styles.weatherIcon}/>
            <Text style={styles.weatherDesc}>{description}</Text>
            <Text style={styles.textTemp}>{temperature}</Text> 
        </View>
    )
} 

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: TRI_COLOR,
        padding: 24,
        alignItems: 'center',
    },
    cityName: {
        fontSize: 20,
        color: BLUE_COLOR,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    weatherIcon: {
        width: 180,
        height: 180,
    },
    weatherDesc: {
        textTransform: 'capitalize',
        fontSize: 24,
        color: BLUE_COLOR,
        letterSpacing: 1,
        fontWeight: '800',
    },
    textTemp: {
        fontSize: 30,
        color: PRIMARY_COLOR,
        marginTop: 14,
    },
})
