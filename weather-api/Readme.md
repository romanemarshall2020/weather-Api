use this endpoint with city and state parameters (City, State) to get lat and long 
  - (Endpoint Example: https://nominatim.openstreetmap.org/search?city=fairburn&state=georgia&countrycodes=us&limit=9&format=json)

use this endpoint with the lat and long you recieve from previous end point to forecast : getForecast(lat, Long)
    - (Endpoint Example: https://api.open-meteo.com/v1/forecast?latitude=37.75&longitude=-84.39&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York )

