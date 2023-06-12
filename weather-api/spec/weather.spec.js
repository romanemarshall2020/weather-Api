const Weather = require('../js/weather.js');

describe("weather", () => {
    it("Receives a valid response when calling location API", async () => {
        //test that when you call getLatAndLong with valid input that it returns a response that is not empty
         
        
        let weatherArr = await Weather.getLatAndLong('atlanta', 'georgia');
         //expect t to not be empty or have text etc
            expect(weatherArr).toEqual(["33.7489924", "-84.3902644"])
         //expect t['lat'] to be a number or something
         
       });
       
       it("Receives empty response when calling location API", async () => {
        //test that when you call getLatAndLong with invalid input that it returns a response that is empty
       
         //call it with something like attttlllanta thats not valid
       });
       
       it("Receives valid response when calling Weather API", async () => {
        //test that when you call getForecast with valid input that it returns a response that is not empty
       });
       
       it("Receives empty response when calling Weather API", async () => {
        //test that when you call getForecast with invalid input that it returns a response that is empty
       });
})
