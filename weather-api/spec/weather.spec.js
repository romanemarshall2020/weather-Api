
const Weather = require('../js/weather.js');
// const { get } = require('http');

describe("weather", () => {
    it("Receives a valid response when calling location API", async () => {
         
        
        let weatherArr = await Weather.getLatAndLong('atlanta', 'georgia');

            expect(weatherArr).toEqual(["33.7489924", "-84.3902644"])

         
       });
       
       it("Receives empty response when calling location API", async () => {
        //test that when you call getLatAndLong with invalid input that it returns a response that is empty
        let weatherArr = await Weather.getLatAndLong('atttlanta', 'georgia');
         //call it with something like attttlllanta thats not valid
         expect(weatherArr).toEqual([])
       });
       
       it("Receives valid response when calling Weather API", async () => {
        //test that when you call getForecast with valid input that it returns a response that is not empty
        let weatherArr = await Weather.getForecast("33.7489924", "-84.3902644")
        expect(weatherArr.length).toEqual(2)
        expect(weatherArr[0].length).toEqual(7)
        expect(weatherArr[1].length).toEqual(7)
       });
       
       it("Receives empty response when calling Weather API", async () => {
        //test that when you call getForecast with invalid input that it returns a response that is empty
        let weatherArr = await Weather.getForecast("m", "f")
        expect(weatherArr.length).toEqual(0)
       });
})
