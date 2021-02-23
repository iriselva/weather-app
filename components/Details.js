import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { format, fromUnixTime } from 'date-fns';
import { colors } from '../utils/colors'
import DetailCard from './DetailCard'

const { BLUE_COLOR, PRIMARY_COLOR } = colors

export default function Details({currentWeather, unitsSystem}) {
    /* geting current weather data */
    const {
        wind: {speed},
        clouds: {all},
        main: {humidity, feels_like},
        sys: {sunrise, sunset}
    } = currentWeather

    /* placing correct wind units */
    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h :`
    const iconColor = BLUE_COLOR;
    const feelTemperature = `${Math.round(feels_like)}°`;
        
    return (
        /* scrollbar for weather details */
        <ScrollView 
            horizontal={true} 
            style={{flexGrow: 0}}
            showsHorizontalScrollIndicator={true}  
        >
            <View style={styles.weatherDetailsRow}>
                {/* Reusing detail card styles and placing each info */}
                <DetailCard 
                    title="Wind" 
                    text={windSpeed} 
                    Icon={() => <Fontisto name="wind" size={30} color={iconColor} />}
                />
                <DetailCard 
                    title="Clouds" 
                    text={`${all} %`}
                    Icon={() => <Fontisto name="cloudy" size={30} color={iconColor} />}
                />
                <DetailCard 
                    title="Humidity" 
                    text={`${humidity} %`}
                    Icon={() => <Feather name="droplet" size={30} color={iconColor} />}
                />
                <DetailCard 
                    title="Feels like" 
                    text={feelTemperature}
                    Icon={() => <Feather name="thermometer" size={30} color={iconColor} />}
                />
                <DetailCard 
                    title="Sunrise" 
                    text={format(fromUnixTime(sunrise), 'HH:mm')}
                    Icon={() => <Feather name="sunrise" size={30} color={iconColor} />}
                />
                <DetailCard 
                    title="Sunset" 
                    text={format(fromUnixTime(sunset), 'HH:mm')}
                    Icon={() => <Feather name="sunset" size={30} color={iconColor} />}
                />
            </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
    }
})
