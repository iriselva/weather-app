# Module 6 Beyond the Browser
## Weather App

For this project I used Expo and React Native to create a little weather app. I used Open Weathe API and the Expo Go app to view my project. 

The app asks for your location and once accepted it shows your current weather. In the top left corner you can change the units system from Celcius to Farenheit with a modal. In the top right corner there is a Reaload Pressable for refreshing the currents weather. Then all extra info is shown in a bottom ScrollView bar. I also used ActivityIndicator to show during loading.

I hope you like it!

## Live version
To view the project first create an [Expo account](https://expo.io/). Once you are logged in open this link: 
>  [Weather App](https://expo.io/@iriselva/projects/mod6weather-app)

If you have the Expo go app in your phone you can open the app by scanning the QR code.

Otherwise you can click "Open project in the browser" to open a phone simulator.

> Or you can...
> 1. Clone this repository to your computer and open with VS Code 
> 2. Open the terminal and run the application with npm run start
> 3. From the browser scan the qr code with your phone and open with the Expo Go App
> 3. Or open the project with the webbrowser. (In the browser you can open the developer tools and change view to responsive. Inspect the modal component and delete it to see how the app should look) 

## Files
+ [App](App.js)
+ [Weather Info](./components/WeatherInfo.js)
+ [Units Picker](./components/UnitsPicker.js)
+ [Details](./components/Details.js)
+ [Detail Card](./components/DetailCard.js)
+ [Reload](./components/Reload.js)
+ [Colors](./utils/colors.js)

## Recources
This project was made with:
+ [Expo](https://expo.io/)
+ [React Native](https://reactnative.dev/)
+ [Open Weather API](https://openweathermap.org/)
+ [Expo Icons](https://icons.expo.fyi/)
+ [React Native Crash Course with Esteban Codes on Youtube](https://www.youtube.com/watch?v=NgDaPmxewcg)

---
