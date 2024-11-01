import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/SearchForm/SearchForm'
import Form from './components/WeatherDisplay/WeatherDisplay'
import axios from 'axios'
import background from './assets/weatherVideo.mp4'

const apiKey = '59247bfe3dff1b7dacdacf06de546a1b'

function App() {
  const [cityName, setCityName] = useState(localStorage.getItem('nameCity') || '')
  const [weathe, setWeather] = useState({})
  const [flagCheckNameCity, setFlagCheckNameCity] = useState(true)


  const response = async () => {
    try {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      setFlagCheckNameCity(true)
      localStorage.setItem('nameCity', cityName)
      setWeather(data.data)
    } catch (error) {
      console.log(error.message);
      setFlagCheckNameCity(false)
    }
  }


  useEffect(() => {
    response()
  }, [cityName])


  return (
    <>
      <video src={background} autoPlay muted loop className='background' />
      <div className='wrapper'>
        <Search setCityName={setCityName} flagCheckNameCity={flagCheckNameCity} setWeather={setWeather} setFlagCheckNameCity={setFlagCheckNameCity} />
        <Form weathe={weathe} />
      </div>
    </>
  )
}

export default App
