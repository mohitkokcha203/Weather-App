
import { useState } from 'react';
import Button from '@mui/material/Button';
import Weatherinfo from './Weatherinfo';
import './WeatherApp.css';

function WheatherApp({ updateInfomation, handleError }) {
  let [city, setCity] = useState("");
  let URL = "https://api.openweathermap.org/data/2.5/weather";
  let Key = "6e91efe018bb1ef0925bfaa8ed464c89";

  let getWheatherinfo = async () => {
    try {
      let response = await fetch(`${URL}?q=${city}&appid=${Key}&units=metric`);
      if (!response.ok) {
        throw new Error('No Such Place Exists');
      }
      let jsonresponse = await response.json();
      let result = {
        cityName: jsonresponse.name,
        temp: jsonresponse.main.temp,
        min_temp: jsonresponse.main.temp_min,
        max_temp: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feel_likes: jsonresponse.main.feels_like,
        weather_desc: jsonresponse.weather[0].description,
      };
      console.log(jsonresponse);
      return result;
      
    } catch (err) {
      throw err;
    }
  };

  let handleclick = async (eve) => {
    eve.preventDefault();
    try {
      let newResult = await getWheatherinfo();
      updateInfomation(newResult);
      setCity("");
    } catch (err) {
      handleError(err.message);
    }
  };

  let handlerchange = (eve) => {
    setCity(eve.target.value);
  };

  return (
    <div className='weather-app-div'>
      <form onSubmit={handleclick}>
        <input
          className='weather-app-div-input'
          required
          placeholder='Enter City'
          value={city}
          onChange={handlerchange}
        />
        <br /><br />
        <Button variant="contained" type='submit' >Search</Button>
        <br /><br />
      </form>
    </div>
  )
}

export default WheatherApp;
