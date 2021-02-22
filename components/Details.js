import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { colors } from '../utils/index'
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function Details({currentWeather, unitsSystem}) {
    const {
        wind: {speed},
        clouds: {all},
        main: {humidity, feels_like},
        sys: {sunrise, sunset}
    } = currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h :`

    return (
        <ScrollView 
            horizontal={true} 
            style={{flexGrow: 0}}
            showsHorizontalScrollIndicator={true}  
        >
            <View style={styles.weatherDetailsRow}>
                <View style={styles.detailsBox}>
                    <Fontisto name="wind" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text>Wind</Text>
                        <Text>{windSpeed}</Text> 
                    </View>    
                </View>
                <View style={styles.detailsBox}>
                    <Fontisto name="cloudy" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text>Clouds</Text>
                        <Text>{all}%</Text> 
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <Feather name="droplet" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text>Humidity</Text>
                        <Text>{humidity}%</Text> 
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <Feather name="thermometer" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text>Fells like</Text>
                        <Text>{feels_like}°</Text> 
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <Feather name="sunrise" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text >Sunrise</Text>
                        <Text>{sunrise}</Text> 
                    </View>
                </View> 
                <View style={styles.detailsBox}>
                    <Feather name="sunset" size={20} color="black" />
                    <View style={styles.detailText}>
                        <Text >Sunset</Text>
                        <Text>{sunset}</Text> 
                    </View>
                </View>
            </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
        margin: 6,
    },
    detailText: {
        fontWeight: 'bold',
        marginLeft: 6,
    }

})
