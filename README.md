
## User model
- users name
- username
- email
- phone number 
- company

## Using the API
The API runs on a simple express backend, and runs on localhost port 3000, and has two endpoints

* `/api/users`
 Returns a JSON collection with 10 users
* `/api/user/USER_ID`
 Returns a specific user. `USER_ID` represents the id of the single user you want to fetch

## Starting the application
* Run the backend: `npm run backend`
* Run the frontend: `npm run frontend`
