import { Cloud, CloudDrizzle, CloudFog, CloudRain, CloudSun, Snowflake, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function App(){
  const [weatherData, setWeatherData] = useState(null);
  const [hour, setHours] = useState("");
  const [minute, setMinute] = useState("");
  const [seconds, setSeconds] = useState("");

  const [sunsetHour, setSunsetHours] = useState("");
  const [sunsetMinute, setSunsetMinute] = useState("");
  const [sunsetSeconnds, setSunsetSeconnds] = useState("");
  useEffect(()=>{
    async function getWeather(){
      const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ghazni&appid=c06cd9456c06e943016cd578f35487fe");
      const jawab = await data.json();
      setWeatherData(jawab);
      const sunRiseDate = new Date(jawab.sys.sunrise * 1000);
      const sunRiseHour = sunRiseDate.getHours();
      const sunRiseMinute = sunRiseDate.getMinutes()
      const sunRiseSeconds = sunRiseDate.getSeconds();
      setHours(sunRiseHour);
      setMinute(sunRiseMinute)
      setSeconds(sunRiseSeconds);
      const sunSetDate = new Date(jawab.sys.sunset * 1000);
      const sunSetHour = sunSetDate.getHours()
      const sunSetMinute = sunSetDate.getminutes()
      const sunSetSeconds= sunSetDate.getSeconds()
      setSunsetHours(sunSetHour);
      setSunsetMinute(sunSetMinute);
      setSunsetSeconnds(sunSetSeconds);
    }
     getWeather();
  },[])
  if(!weatherData){
    return (
      <h1 className="text-3xl font-bold text-red-500 text-center">Please wait a minute....</h1>
    )
  }
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2 h-fit flex flex-col items-center p-5 border-2 border-red-700 rounded-md">
        <h1>{weatherData.name} City</h1>
      <div></div>