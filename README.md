# Record Database Project

This is a simple project that allows you to create a record database in MySQL and run it on your local machine. The project uses Node.js, npm, and MySQL.

Prerequisites
Before getting started, ensure that you have the following installed on your machine:

Node.js: Download and Install Node.js
MySQL: Download and Install MySQL

# Getting Started

Follow the steps below to set up and run the project:

1. Clone this repository to your local machine or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:
----> npm install
4. Update the .env file with your MySQL database configuration. Modify the following lines with your database details:
  ```
  NAME = your_database_name
  USER = your_database_username
  PASSWORD = your_database_password
  HOST = localhost
  DATABASEPORT = '3306'
  ```
6. Save the ".env" file.

# Running the Project
To run the project, follow these steps:

1. Ensure that your MySQL server is running on your local machine.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to start the project:
----> npm start
4. The project will start running, and you will see output indicating that the server is listening on a specific port (e.g., Server listening on port 3000).

# Documentation
You can view the documentation:
https://documenter.getpostman.com/view/21285026/2s93z5A54t

# Unit Testing
For testing you can run---> npm run test or npm run test-report(to generate a report)
- `And you can view the detail of the test report in the report section and open mochawesome.html`

# Project Structure

This application's architectural decisions revolve around building a RESTful API using Node.js and Express framework, with a MySQL database and Sequelize as the ORM (Object-Relational Mapping) tool.

`The project structure is as follows:`
- `app.js`: The main entry point of the application.
- `DB`: Contain js file to connect to the database
- `controllers`: The controllers handle the business logic of the API endpoints, performing actions such as creating records, retrieving records, updating records, and deleting records.
- `middleware`: Various middleware functions are used for request validation and error handling tasks.
- `test-case`: Contains .test.js files to test all the endpoint
- `Routers`: Separate routers are used to organize and handle different API endpoints. The routers modularize the code, making it easier to manage and scale the application.
- `models`: The models define the structure and schema of the database tables using Sequelize. They encapsulate the logic for interacting with the database and provide an abstraction layer.
- `error`: A custom CustomAPIError class handles and propagates custom API errors, providing consistent error responses with appropriate status codes.

`Challenges faced during the development process include:`
- `Handling data validation`: Ensuring that the incoming request data is properly validated to maintain data integrity and prevent errors.
- `Security considerations`: Implementing security measures such as using helmet middleware for setting secure HTTP headers and preventing cross-site scripting (XSS) attacks.
- `Error handling and debugging`: Implementing robust error handling mechanisms and debugging issues to ensure smooth operation of the API.

`Additional features that have been implemented in this application include:`
- `Search functionality`: Adding search capabilities to allow users to search for specific records based on certain criteria.
- `Rate limiting`: Implementing rate limiting to prevent abuse or excessive requests to the API.
