import WheatherApp from './WheatherApp'
import Weatherinfo from './Weatherinfo'
import { useState } from "react";
import './App.css'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null); // Initialize as null
  const [error, setError] = useState(null); // State to track errors

  function updateInfo(result) {
    setWeatherInfo(result);
    setError(null); // Clear error when valid data is received
  }

  function handleError(errorMessage) {
    setWeatherInfo(null); // Clear weather info on error
    setError(errorMessage); // Set error message
  }

  return (
    <div className='main-div'>
      
      <div className='body'>
        <h1>Weather App</h1>
        <WheatherApp updateInfomation={updateInfo} handleError={handleError} />
        {weatherInfo && <Weatherinfo Information={weatherInfo} />}
        {error && <h1 className='error-para'>{error}</h1>}
      </div>
    </div>
  )
}

export default App;
