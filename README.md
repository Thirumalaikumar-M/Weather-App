# Weather App

The weather app is a user-friendly application that provides accurate weather information for any location worldwide. With a clean and intuitive interface, users can quickly check the current weather conditions, including temperature, humidity, wind speed, and more. Whether planning for a trip, organizing outdoor activities, or simply staying informed about the weather, this app offers a convenient way to access up-to-date weather data.

## Key Features

- **Real-time Weather Data:** The app retrieves weather information from a reliable weather API, ensuring that users get the most accurate and up-to-date data.
- **Search Functionality:** Users can easily search for weather information for any desired location, allowing them to stay informed about various places of interest.
- **Responsive Design:** The app is fully responsive and works seamlessly across different devices and screen sizes, providing a consistent user experience.
- **User-Friendly Interface:** The intuitive and visually appealing interface makes it easy for users to navigate and find the desired weather information effortlessly.
- **Additional Weather Details:** Along with the basic weather information, the app may include additional details such as min/max temperature, atmospheric pressure, humidity, and more, depending on the weather API used.

## Screenshot

![weatherapp-ss](https://github.com/Thirumalaikumar-M/Weather-App/assets/111740460/c816a3e8-1f3d-499b-b878-ef94d81b7f0c)

## Deployment

View my deployment on Netlify : <a href="https://tk-weatherapp.netlify.app/">https://tk-weatherapp.netlify.app/</a>

## Setup

To run the Weather App locally on your machine, follow these steps:

1. Make sure you have Node.js installed on your machine.

2. Clone this repository or download the source code.
   ```
     git clone https://github.com/Thirumalaikumar-M/Weather-App.git
   ```
3. Open a terminal and navigate to the project directory.
   ```
     cd weather-app
   ```
4. Run the following command to install the project dependencies:
   ```
     npm install
   ```
   
5. Obtain an API key:
   - Sign up for an account on a weather API provider (e.g., OpenWeatherMap, Weatherbit, AccuWeather) prefarably OpenWeatherMap which is used in this project.
   - Generate an API key.

6. Set up environment variables:
   - Create a ' .env ' file in the root directory of the project.
   - Add the following line to the .env file:
   ```
     REACT_APP_API_KEY= "YOUR_API_KEY"
   ```

7. Start the development server with the following command:
   ```
     npm start
   ```
8. Open the app in your browser:
   - Open http://localhost:3000 in your preferred browser.
   - The Weather App should now be running and accessible in your browser.
  
## API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. OpenWeatherMap provides a wide range of weather information, including current weather conditions, forecasts, and historical data. It offers various API endpoints and data formats to suit different needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
