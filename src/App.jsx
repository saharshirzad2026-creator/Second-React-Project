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
