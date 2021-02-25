import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo'
import UnitsPicker from './components/UnitsPicker'
import Details from './components/Details'
import Reload from './components/Reload'
import {colors} from './utils/colors'
import { WEATHER_API_KEY } from 'react-native-dotenv'

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const { BACKGROUND_COLOR } = colors

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
      </View>
    )} else if (errorMessage){
      return (
        <View style={styles.container}>
          <View>
            <Text>{errorMessage}</Text>
            <StatusBar style="auto" />
          </View>
        </View>
      )
    } else {
      /* when loading show activity indicator */
      return (
        <View style={styles.containerLoading}>
          <StatusBar style="auto" />
          <View>
            <ActivityIndicator size="large" color={colors.PRIMARY_COLOR}/>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  }
});
