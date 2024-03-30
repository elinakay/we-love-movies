# We Love Movies Backend

Welcome to the We Love Movies backend repository! This project provides the backend functionality for the We Love Movies application, which allows users to browse movies, view theaters and showtimes, read reviews, and more.

## Project Structure

- **`server.js`**: Entry point of the application. Sets up the Express server and listens for incoming requests.
- **`app.js`**: Configuration of the Express application, including middleware setup and route handling.
- **`utils/`**: Contains utility functions used throughout the application, such as property mapping and error handling.
- **`theaters/`**: Module for handling theater-related functionalities, including routes, controllers, services, and database queries.
- **`movies/`**: Module for handling movie-related functionalities, including routes, controllers, services, and database queries.
- **`reviews/`**: Module for handling review-related functionalities, including routes, controllers, services, and database queries.
- **`errors/`**: Contains custom error handling middleware for handling 404 errors, method not allowed errors, and asynchronous error boundaries.
- **`db/`**: Contains database-related files, including migrations and seeds, as well as the connection configuration.

## Features and Endpoints

- **Theaters**:
  - List all theaters: `GET /theaters`
- **Movies**:
  - List all movies: `GET /movies`
  - List movies showing: `GET /movies?is_showing=true`
  - Get movie details: `GET /movies/:movieId`
  - List reviews for a movie: `GET /movies/:movieId/reviews`
  - List theaters showing a movie: `GET /movies/:movieId/theaters`
- **Reviews**:
  - List all reviews: `GET /reviews`
  - Get review details: `GET /reviews/:reviewId`
  - Update a review: `PUT /reviews/:reviewId`
  - Delete a review: `DELETE /reviews/:reviewId`

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Knex.js
- Jest (for testing)
