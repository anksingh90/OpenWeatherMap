import fetch from 'node-fetch';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
    };
}