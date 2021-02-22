import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ActivityIndicator } from 'react-native';
import favicon from './assets/favicon.png';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo'
import UnitsPicker from './components/UnitsPicker'
import Details from './components/Details'
import Reload from './components/Reload'
import {colors} from './utils/index'
import { WEATHER_API_KEY } from 'react-native-dotenv'


const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors



export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')
  
  /* callback, invoking load function */
  useEffect(() => {
    load()
  }, [unitsSystem])
  
  async function load() {
    setCurrentWeather(null)
    setErrorMessage(null)
    /* asking for location permission */
    try {
      let { status } = await Location.requestPermissionsAsync() 

      if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the App')
        return
      }

      /* fetching weather api */
      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl)
      const result = await response.json()

      if(response.ok){
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if(currentWeather) {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topContainer}>
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
          <Reload load={load}/>
        </View>
        <WeatherInfo currentWeather={currentWeather}/>
        <Details currentWeather={currentWeather} unitsSystem={unitsSystem}/>
        {/* <Image source={favicon} style={{width:100, height: 100}}/> */}
      </View>
    )} else if (errorMessage){
      return (
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <StatusBar style="auto" />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.PRIMARY_COLOR}/>
          <StatusBar style="auto" />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2E6EB',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    marginTop: 24,
  }
});
