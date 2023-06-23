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

# Project Structure
The project structure is as follows:
- `app.js`: The main entry point of the application.
- `DB`: Contain js file to connect to the database
- `controllers`: Contains js files of all the operation
- `middleware`: Contains files to validate data and handle error
- `test-case`: Contains .test.js files to test all the endpoint
- `routers`: Contains endpoint location
- `models`: Contains structure of data to store in database

# Documentation
You can view the documentation:
https://documenter.getpostman.com/view/21285026/2s93z5A54t

# Unit Testing
For testing you can run---> npm run test or npm run test-report(to generate a report)
- `And you can view the detail of the test report in the report section and open mochawesome.html`

