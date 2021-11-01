## The Request:

An API that interacts with the National Highway Traffic Safety Administration (NHTSA) API by retrieving vehicle information and relays the vehicle information.

## Requirements:

Your API must support the following features:

- Get a list of all makes (e.g. Toyota, Honda, etc.)

- Get a list of all models given a make and year

- Given a VIN, get the year, make, and model of the vehicle (e.g. for 3N1AB6AP7BL729215: 2011 Nissan Sentra)


## Resources:

For details on how to interact with the NHTSA API, see their documentation available at https://vpic.nhtsa.dot.gov/api/.

https://randomvin.com/ to generate valid VINs for testing

## API URL : https://carshair-api.herokuapp.com/doc/


## Run 

Start the application:
```
npm run start
```

## Test

Run unit tests: 
```
npm run test
```

## update changes to heroku
```
git push heroku master
```

## API docs
1. Start the local server as specified in the run section. 
2. See swagger docs here: http://localhost:8080/api/doc

Enjoyed working on this and you should too :)
