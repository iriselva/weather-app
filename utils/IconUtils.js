export const getIconForWeather = weather => {
    const [{ icon }] = weather;
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
}