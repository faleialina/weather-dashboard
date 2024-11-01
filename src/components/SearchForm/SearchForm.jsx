import { useState } from "react";
import styles from './style.module.css'

function SearchForm({ setCityName, flagCheckNameCity, setWeather, setFlagCheckNameCity }) {
    const [city, setCity] = useState('')

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Weather</h1>
            <div className={styles.wrapperInpAndErr}>
                <input className={styles.weatherInput} type="text" onChange={(e) => setCity(e.target.value)} placeholder="Your city" value={city} />
                {!flagCheckNameCity ? <p className={styles.errorName}>The name of the city is introduced incorrectly</p> : null}
            </div>
            <div>
                <button className={styles.weatherButton} onClick={() => {
                    setCity('')
                    setFlagCheckNameCity(true)
                }}>Reset</button>
                <button className={styles.weatherButton} onClick={() => {
                    setCityName(city)
                }}>Search</button>
            </div>
        </div>
    );
}

export default SearchForm;