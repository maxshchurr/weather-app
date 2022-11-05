import React from 'react'
import { UilMoonset, UilThunderstormSun, UilSun, UilSunset, UilTear, UilWind, UilArrowUp, UilArrowDown,
         UilCloudSun, UilCloudSunRain, UilTemperatureThreeQuarter} from '@iconscout/react-unicons'


function TemperatureAndDetails() {
  return (
    <div>

        <div className=' flex items-center justify-center py-6 text-xl text-cyan-400 '>
            <p>Cloudy</p>
        </div>

        <div className=' flex flex-row items-center justify-between text-white py-3'>

            <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="" 
            className=' w-20'
            />

            <p className=' text-4xl'> 30°</p>
            <div className='flex flex-col space-y-2'>
                <div className=' flex font-light text-sm items-center justify-center'>
                    <UilTemperatureThreeQuarter size={28} className='mr-1' />
                    Feels like :
                    <span className='font-medium ml-2'>33°</span>
                </div>

                <div className=' flex font-light text-sm items-center justify-center'>
                    <UilTear size={28} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-2'>49%</span>
                </div>

                <div className=' flex font-light text-sm items-center justify-center'>
                    <UilWind  size={28} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-2'>10 km/h</span>
                </div>
            </div>
        </div>

        <div className=' flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

            <UilSun />
            <p className=' font-light'>
            Rise: <span className=' font-medium ml-1'>06:46 AM</span>
            </p>
            <p className=' font-light'>|</p>

            <UilSunset />
            <p className=' font-light'>
            Set: <span className=' font-medium ml-1'>08:13 PM</span>
            </p>
            <p className=' font-light'>|</p>

            <UilArrowUp />
            <p className=' font-light'>
            High: <span className=' font-medium ml-1'>34°</span>
            </p>
            <p className=' font-light'>|</p>

            <UilArrowDown />
            <p className=' font-light'>
            Low: <span className=' font-medium ml-1'>29°</span>
            </p>
            

        </div>
    </div>
  )
}

export default TemperatureAndDetails