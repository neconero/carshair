## The Request:

Your task is to build a backend API that interacts with the National Highway Traffic Safety Administration (NHTSA) API by retrieving vehicle information and relaying the vehicle information to a consumer of your API.

## Requirements:

Your API must support the following features:

- Get a list of all makes (e.g. Toyota, Honda, etc.)

- Get a list of all models given a make and year

- Given a VIN, get the year, make, and model of the vehicle (e.g. for 3N1AB6AP7BL729215: 2011 Nissan Sentra)

Must use a well-established web framework such as Express.js to implement your solution. Use of TypeScript is preferred.

Do not return the raw response data from the NHTSA API in your API. Please clean up the responses received from the NHTSA API and return the cleaned response to your API consumer in JSON format.

Please upload your submission to a Git hosting service (such as GitHub, GitLab, BitBucket, etc.), including a link to the public repository in your submission.

Include a README in your submission giving a brief overview of the project, API documentation, and instructions on how to run the app locally.

We are looking for scaleable, maintainable, and testable solutions. Yes, this project is simple enough to write all in one file. However, one of the skills we are looking for is the ability to work within a large & structured code base. Please make sure your solution follows common best practices, and files are organized such that your solution is extendable.

## Resources:

For details on how to interact with the NHTSA API, see their documentation available at https://vpic.nhtsa.dot.gov/api/.

https://randomvin.com/ to generate valid VINs for testing
