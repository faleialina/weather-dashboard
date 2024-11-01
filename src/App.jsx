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


  const response = async () => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    setWeather(data.data)
  }

  useEffect(() => {
    response()
  }, [cityName])

  return (
    <>
      <video src={background} autoPlay muted loop className='background' />
      <div className='wrapper'>
        <Search setCityName={setCityName} setWeather={setWeather} />
        <Form weathe={weathe} />
      </div>
    </>
  )
}

export default App
