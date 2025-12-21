# Reviews / Slider App

A React application for displaying user reviews with an automatic slider and manual navigation controls.

## Features
- **Auto-Sliding**: Reviews cycle automatically every 3 seconds.
- **Manual Navigation**: Users can manually navigate between reviews using next/prev buttons.
- **Data Driven**: Content is dynamically rendered from a data source.
- **Responsive**: Adapts to different screen sizes.

## Screenshot
![Slider App Home Screen](public/slider-home.png)

## Technologies Used
- React
- CSS
- JavaScript

## Getting Started

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Available Scripts
In the project directory, you can run:

#### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure
- `src/App.js`: Main component containing the slider logic and state management.
- `src/data.js`: The data source containing the list of reviews (name, job, image, text).
- `src/index.css`: Contains all the styling, including the sliding animations.

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
Distributed under the MIT License.

