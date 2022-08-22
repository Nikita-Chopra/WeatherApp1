import React, { useEffect, useState } from "react";
import "../components/temp.css";
import img1 from "../components/image/weather.png"

export default function TempApp() {

const [city, setCity] = useState('')
const [search, setSearch] = useState('chandigarh')

useEffect(()=>{
    fetchApi()
},[search])

const fetchApi = async() =>{
const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search}& units=metric&units=metric&appid=ab5cb14feaec384c5a4140dabd365adb`)
const data = await res.json()

setCity(data.main)
console.log(data.main)
}


  return (
    <div className="main">
      <div className="card">
        <div className="a">
            <input type="search" className="text1" placeholder="" value = {search} onChange={(e)=>setSearch(e.target.value)}></input>
        </div>

{!city? <p className="text5">No Data Found</p>: <>
<div className="b">
            <div className="b1">
                <img src={img1} className="img-1" alt=""></img>
                <p className="text2">{search}</p>
            </div>
            <div className="b2">
                <p className="text3">Temp: {city.temp} </p>
            </div>
            <div className="b3">
                <p className="text4">Min: {city.temp_max} Cel</p>
                <p className="text4">Max: {city.temp_min} Cel</p>
            </div>
        </div>


</>}



        
      </div>
    </div>
  );
}


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// ab5cb14feaec384c5a4140dabd365adb