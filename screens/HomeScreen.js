// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31574b142dcf2182775ba565a24be264`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <View>
      <Text>Weather App</Text>
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather && (
        <View>
          <Text>Temperature: {weather.main.temp}</Text>
          <Text>Description: {weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
