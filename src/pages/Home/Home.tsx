import React, {useEffect} from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import styles from './Home.module.scss';
import {ThisDay} from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import {Days} from './components/Days/Days';
interface Props{

}
const Home = ()=>{
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData);
  
    useEffect(() => {
      dispatch(fetchCurrentWeather('paris'));
    }, []);
    return (<div className={styles.home}> 
     <div className={styles.wrapper}>
    <ThisDay weather={weather}/> 
    <ThisDayInfo/>
     </div>
     <Days/>
    </div>)};

 export default Home;