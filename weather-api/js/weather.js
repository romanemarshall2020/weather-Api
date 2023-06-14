const { error } = require("console");
const fetch = require("node-fetch")
const input = require('readline-sync');
// function used to consume API
async function getLatAndLong(city, state) {
//how to make an API call to get lattitude and longitude:
// use end point to get latitude and longitude of city and state you wush to know the weather for 

const res = await fetch("https://nominatim.openstreetmap.org/search?city=" + city + "&state=" + state + "&countrycodes=us&limit=9&format=json");
const jsonData = await res.json();
console.log(jsonData)
if(jsonData.length > 0){
let coordinatesArr = [];
//access long and lat inside of json and place inside of variable for later use
let lat = jsonData[0]['lat']
let long = jsonData[0]['lon']
coordinatesArr.push(lat, long)
console.log(coordinatesArr)
  //return array with lat and long variables in it
  return coordinatesArr;
} else {
  return jsonData
}
  
}
// getLatAndLong()

async function getForecast(lat, long){
//API URL for getting weather forecast using lat and lon
console.log('in here')
console.log(lat + long)

let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat +"&longitude=" + long + "&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York"
 const res = await fetch(url)
 
  console.log(url)
  const jsonData = await res.json();
  console.log(jsonData)
 if( jsonData["error"] !== true ){
  // for(let i = 0; i < jsonData["daily"].length; i++) {
  let tempMax = jsonData["daily"]["temperature_2m_max"]
  let tempMin = jsonData["daily"]["temperature_2m_min"]
  let tempArray = [tempMax, tempMin]
  console.log("if data is not error")
 return tempArray
  // }

 } else if(jsonData["error"] === true){
  console.log("if data error ")
  // let errorMessage = jsonData["reason"]
  return []
 }
}

async function main(){
  let city = input.question("Input latitude of city: ")
  let state = input.question("Input Longitude of city: ")

  let latLongArray = await getLatAndLong(city, state)
  console.log('this is lat array: ' + latLongArray);
  let  forcastArrays = await getForecast(latLongArray[0], latLongArray[1])

  console.log(forcastArrays)
 
}


module.exports = {getLatAndLong, getForecast, main};
