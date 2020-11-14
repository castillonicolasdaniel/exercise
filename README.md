# Sample Exercise
This is an exercise that uses Express and a React app to display a list of items using the MercadoLibre API.

## Running the app
To run the app we first need to start the Express server

  1. In your terminal, go to `../exercise/react-backend/`
  2. Run `yarn`
  3. Then run `PORT=3001 node bin/www`

Now we need to start the React app. Open a new terminal and follow these steps:

  4. Go to `../exercise/react-backend/search-app/`
  5. Run `yarn`
  6. Run `yarn start`

And that's it! Remember that if you need to change the port on which the express server is running you need to update the proxy setting inside the search-app package.json file.

## Running tests
To run the tests follow these steps:
  1. Go to `../exercise/react-backend/search-app/`
  2. Run `yarn test`
