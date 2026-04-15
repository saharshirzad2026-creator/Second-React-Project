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
      <div className="w-1/2 h-fit flex flex-col items-center p-5 border-3 border-red-700 rounded-md">
        <h1 className="text-3xl text-red-500 font-bold">{weatherData.name} City</h1>
      <div>
      {weatherData.weather[0].main === "Clear" ? (
        <Sun size={42} className="text-yellow-500"/>
      ) : weatherData.weather[0].main === "Clouds" ? (
        <Cloud size={42}/>
      ) : weatherData.weather[0].main === "Thunderstorm" ? (
        <CloudSun size={42}/>
      ) : weatherData.weather[0].main === "Drizzle" ? (
        <CloudDrizzle size={42}/>
      ) : weatherData.weather[0].main === "Rain" ? (
        <CloudRain size={42}/>
      ) : weatherData.weather[0].main === "Snow" ? (
        <Snowflake size={42}/>
      ) : weatherData.weather[0].main === "Fog" ? (
        <CloudFog size={42}/>
      ) : (
        ""
      )
    }
    <div className="w-full flex justify-between gap-64 items-center">
      <p className="flex gap-1.5 text-xl font-bold">
        <span>Tempreture</span>
        <span>{weatherData.main.temp}</span>
      </p>
      <p className="flex gap-1.5 text-xl font-bold">
        <span>Humidity</span>
        <span>{weatherData.main.humidity}%</span>
      </p>
    </div>
      <div className="flex w-full justify-between items-center">
        <p className="flex gap-2 text-xl">
          <span>Sunrise</span>
          <span>{hour}:{minute}:{seconds}</span>
        </p>
        <p className="flex gap-2 items-center text-xl">
          <span>Sunset</span>
          <span>{sunsetHour}:{sunsetMinute}:{sunsetSeconnds}</span>
        </p>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}