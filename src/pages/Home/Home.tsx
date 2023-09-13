import React, {FC} from 'react';
import styles from './Home.module.scss';
import {ThisDay} from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import {Days} from './components/Days/Days';
interface Props{

}
const Home = ()=>{
    return (<div className={styles.home}> 
     <div className={styles.wrapper}>
    <ThisDay/> 
    <ThisDayInfo/>
     </div>
     <Days/>
    </div>)};

 export default Home;