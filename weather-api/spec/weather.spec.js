import Weather from '../js/weather.js';

describe("weather", () => {
    let weather = new Weather()
    it("Receives a valid response when calling location API", async () => {
        //test that when you call getLatAndLong with valid input that it returns a response that is not empty
         
        
       
         //expect t to not be empty or have text etc
            expect( weather.getLatAndLong('atlanta', 'georgia')).toEqual(["33.7489924", "-84.3902644"])
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
