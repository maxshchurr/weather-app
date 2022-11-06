import React, { useState } from 'react'
import axios from 'axios'
import {
  UilTemperature,
  UilTemperaturePlus,
  UilTemperatureMinus, 
  UilTear,
  UilWind
} from "@iconscout/react-unicons";


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d8956ad33df84f68dd824887057d1f6d`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">

          <div className="location">
            <p>City: {data.name}</p>
            <p>Country: {data.sys.country}</p>
          </div>

          <div className="temp">
            {data.main ?<h1>{data.main.temp.toFixed()}C­°</h1> : null}
            <p></p>
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p> : null}
          </div>

        </div>

        {data.name !== undefined &&
          <div className="bottom">

            <div className="feels">
              {data.main ? <p className='bold'>Feels like<UilTemperature size={25} /></p> : null}
              <p> {data.main.feels_like.toFixed()}C°</p>
            </div>

            <div className="humidity">
              {data.main ? <p className='bold'> Humidity<UilTear size={25}/></p> : null}
              <p>{data.main.humidity}%</p>
            </div>

            <div className="wind">
              {data.wind ? <p className='bold'>Wind Speed<UilWind size={25} />  </p> : null}
              <p>{data.wind.speed.toFixed()} M/S</p>
            </div>

            <div className="wind">
              {data.wind ? <p className='bold'>min<UilTemperatureMinus size={25} /></p> : null}
              <p>{data.main.temp_min.toFixed()}C­°</p>
            </div>

            <div className="wind">
              {data.wind ? <p className='bold'>max<UilTemperaturePlus size={25} /></p> : null}
              <p>{data.main.temp_max.toFixed()}C­°</p>
            </div>

          </div>
        }



      </div>
    </div>
  );
}

export default App;