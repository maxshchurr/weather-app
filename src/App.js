import React, { useState } from 'react';
import axios from 'axios';
import iconUrlFromCode from './iconUrlFromCode';
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
  

  const formatBackground = () =>{
    if(data.name === undefined) return "bg-[url('./assets/sunset_dark.jpg')] bg-[length:100%_100%]";

    if(data.weather[0].main === "Thunderstorm" ) return "bg-[url('./assets/thunderstorm-wallpaper.jpg')] bg-[length:100%_100%]"

    if(data.weather[0].main === "Mist"  || data.weather[0].main === "Fog" ||
    data.weather[0].main === "Haze")return "bg-[url('./assets/mist-wallpaper.jpg')] bg-[length:100%_100%]"

    if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") return "bg-[url('./assets/rain-wallpaper.jpg')] bg-[length:100%_100%]"

    if (data.weather[0].main === "Clear") return "bg-[url('./assets/clear-sky-wallpaper.jpg')] bg-[length:100%_100%]"

    if (data.weather[0].main === "Dust" || data.weather[0].main === "Sand" || 
    data.weather[0].main === "Ash") return "bg-[url('./assets/dust-wallpaper.jpg')] bg-[length:100%_100%]"

    if (data.weather[0].main === "Tornado" || data.weather[0].main === "Squall") return "bg-[url('./assets/tornado-wallpaper.jpg')] bg-[length:100%_100%]"

    if(data.weather[0].main === "Snow") return "bg-[url('./assets/snow-wallpaper.jpg')] bg-[length:100%_100%]"

    if(data.weather[0].main === "Clouds" ) return "bg-[url('./assets/clouds-wallpaper.jpg')] bg-[length:100%_100%]"

    
    return "bg-[url('./assets/sunset_dark.jpg')] bg-[length:100%_100%]"
    
  }

  const formatBodyText = () =>{
    if (data.weather[0].main === "Rain") return "text-neutral-200 bold"
    if (data.weather[0].main === "Snow") return "text-cyan-300 bold"

  }

  const formatBottomText = () =>{
    if (data.weather[0].main === "Thunderstorm") return "text-emerald-700";
    if (data.weather[0].main === "Mist") return "text-neutral-900";
    

    if (data.weather[0].main === "Snow") return "text-emerald-700";
    if (data.weather[0].main === "Rain") return "text-cyan-300"
    if (data.weather[0].main === "Clear") return "text-neutral-100"
  }

  return (

      
  
    <div className={`app ${formatBackground()}`}>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

    
       <div className="container">
        
         {data.name !== undefined &&
          <div className={`top ${formatBodyText()}`}>

          <div className="location">
            <p className='bold'>City: {data.name}</p>
            <p className='bold'>Country: {data.sys.country}</p>
          </div>

          <div className="temp">
            {data.main ?<h1>{data.main.temp.toFixed()}C°</h1> : null}
            <p></p>
          </div>
          
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p> : null}
          </div>

          <div className="description">
            <p><img src={iconUrlFromCode(data.weather[0].icon)} alt="" /> </p>
          </div>

        </div>
        }

        {data.name !== undefined &&
          <div className={`bottom ${formatBottomText()}`}>

            <div className="wind">
              {data.wind ? <p className='bold'>Wind Speed</p> : null}
              <div className='img-bt'>
                <UilWind size={25} />
              </div>
              <p>{data.wind.speed.toFixed()} M/S</p>
            </div>

            <div className="humidity">
              {data.main ? <p className='bold'>Humidity</p> : null}
              <div className='img-bt'>
                <UilTear size={25}/>
              </div>
              <p>{data.main.humidity}%</p>
            </div>

            <div className="feels">
              {data.main ? <p className='bold'>Feels like</p> : null}
              <div className='img-bt'>
                <UilTemperature size={25}/>
              </div>
              <p> {data.main.feels_like.toFixed()}C°</p>
            </div>

            <div className="temp-min">
              {data.wind ? <p className='bold'>Min</p> : null}
              <div className='img-bt'>
                <UilTemperatureMinus size={25}/>
              </div>
              <p>{data.main.temp_min.toFixed()}C°</p>
            </div>

            <div className="temp-max">
              {data.wind ? <p className='bold'>Max</p> : null}
              <div className='img-bt'>
                <UilTemperaturePlus size={25}/>
              </div>
              <p>{data.main.temp_max.toFixed()}C°</p>
            </div>
          
          </div>   
        }

      </div>
    </div>
  );
}

export default App;