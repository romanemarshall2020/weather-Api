import { location } from "../model/location";
class Weather {
  constructor() {
  this.getLatAndLong()
  }
  // const input = require('readline-sync')

// function used to consume API
static async getLatAndLong(city, state) {
//how to make an API call to get lattitude and longitude:
// use end point to get latitude and longitude of city and state you wush to know the weather for 

const res = await fetch("https://nominatim.openstreetmap.org/search?city=" + city + "&state=" + state + "&countrycodes=us&limit=9&format=json");
const jsonData = cityres.json();

//access long and lat inside of json and place inside of variable for later use
let lat =jsonData[0]['lat']
let long =jsonData[0]['lon']
  
  //return array with lat and long variables in it
  console.log(location)
  return Location = lat.join(long)
  
}
// getLatAndLong()

static async getForecast(){
//API URL for getting weather forecast using lat and lon

//"https://api.open-meteo.com/v1/forecast?latitude=xxx&longitude=xxx&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York"

  //res["temperature_2m_min"] will give you array of lows for next week

  
}


  
}



export default Weather;
