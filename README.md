
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

## Restrictions
* You may not use a CSS framework such as Bootstrap

## Requirements
* You must use React
* The app and table must be responsive, with a “mobile-first” approach in mind.
* You must use appropriate YouSee colors. You can find colors by inspecting any page under the https://yousee.dk/ domain.
* The users must be fetched asynchronously using JavaScript.
* Unfortunately the backend is sometimes rather slow. So you must display a loading indicator while you're loading the data.
* You must deliver the app in a git repository. You decide if you want to use GitHub, Bitbucket, GitLab or whatever. 

## Starting the application
* Run the backend: `npm run backend`
* Run the frontend: `npm run frontend`
