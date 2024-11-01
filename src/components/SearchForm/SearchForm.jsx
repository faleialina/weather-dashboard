import { useState } from "react";
import styles from './style.module.css'

function SearchForm({ setCityName, setWeather }) {
    const [city, setCity] = useState('')

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Weather</h1>
            <button className={styles.weatherButton} onClick={() => {
                setCity('')
                setWeather({})
            }}>Reset</button>
            <input className={styles.weatherInput} type="text" onChange={(e) => setCity(e.target.value)} placeholder="Your city" value={city} />
            <button className={styles.weatherButton} onClick={() => {
                setCityName(city)
                localStorage.setItem('nameCity', city)
            }}>Search</button>
        </div>
    );
}

export default SearchForm;