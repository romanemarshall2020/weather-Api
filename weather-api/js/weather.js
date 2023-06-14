const colors = require('colors');
const fetch = require("node-fetch");
const { connected } = require("process");
const input = require('readline-sync');
// function used to consume API
async function getLatAndLong(city, state) {
//how to make an API call to get lattitude and longitude:
// use end point to get latitude and longitude of city and state you wush to know the weather for 

const res = await fetch("https://nominatim.openstreetmap.org/search?city=" + city + "&state=" + state + "&countrycodes=us&limit=9&format=json");
const jsonData = await res.json();
colors.enable()
// console.log(jsonData)
let cityLocation = jsonData[0]["display_name"]

let Latitude = jsonData[0]["lat"]
let longitude = jsonData[0]["lon"]

console.log("\n")
console.log("Current city : "+ cityLocation)
console.log("\n")

console.log("Latitude : " + Latitude)


console.log("Longitude : " + longitude)
console.log("\n")

if(jsonData.length > 0){
let coordinatesArr = [];
//access long and lat inside of json and place inside of variable for later use
let lat = jsonData[0]['lat']
let long = jsonData[0]['lon']
coordinatesArr.push(lat, long)
// console.log(coordinatesArr)
  //return array with lat and long variables in it
  return coordinatesArr;
} else {
  return jsonData
}
  
}
// getLatAndLong()

async function getForecast(lat, long){
//API URL for getting weather forecast using lat and lon

let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat +"&longitude=" + long + "&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York"
 const res = await fetch(url)
 
 
  const jsonData = await res.json();
  // console.log(jsonData)
 if( jsonData["error"] !== true ){
  let tempMax = jsonData["daily"]["temperature_2m_max"]
  let tempMin = jsonData["daily"]["temperature_2m_min"]
  let units = jsonData["daily_units"]["temperature_2m_min"]
  let time = jsonData["daily"]["time"]
  let maxTemp = jsonData["daily"]["temperature_2m_max"]
  let minTemp = jsonData["daily"]["temperature_2m_min"]
  let day1 = time[0].substr(5, 7)
  let day2 = time[1].substr(5, 7)
  let day3 = time[2].substr(5, 7)
  let day4 = time[3].substr(5, 7)
  let day5 = time[4].substr(5, 7)
  let day6 = time[5].substr(5, 7)
  let day7 = time[6].substr(5, 7)

  console.log("Max temperature for the next 7 days : " )
  console.log(day1 + ": " + maxTemp[0] + units)
  console.log(day2 + ": " + maxTemp[1] + units)
  console.log(day3 + ": " + maxTemp[2] + units)
  console.log(day4 + ": " + maxTemp[3] + units)
  console.log(day5 + ": " + maxTemp[4] + units)
  console.log(day6 + ": " + maxTemp[5] + units)
  console.log(day7 + ": " + maxTemp[6] + units)
  
  console.log("\n")

  console.log("Min. temperature for the next 7 days : " )
  console.log(day1 + ": " + minTemp[0] + units)
  console.log(day2 + ": " + minTemp[1] + units)
  console.log(day3 + ": " + minTemp[2] + units)
  console.log(day4 + ": " + minTemp[3] + units)
  console.log(day5 + ": " + minTemp[4] + units)
  console.log(day6 + ": " + minTemp[5] + units)
  console.log(day7 + ": " + minTemp[6] + units)
  let tempArray = [tempMax, tempMin]
 
 return tempArray
  // }

 } else if(jsonData["error"] === true){
  console.log("if data error ")
  // let errorMessage = jsonData["reason"]
  return []
 }
}

async function main(){
  console.log("==========================================")
  console.log("welcome to our weather app")
  let city = input.question("Please enter city name: ")
  let state = input.question("Please enter State: ")

  let latLongArray = await getLatAndLong(city, state)
  let  forcastArrays = await getForecast(latLongArray[0], latLongArray[1])


}


module.exports = {getLatAndLong, getForecast, main};
