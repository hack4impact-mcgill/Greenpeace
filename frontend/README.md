# Greenpeace Frontend

## Overview
The frontend of the application will serve the maps UI by accessing the Google Maps API and rendering the result using React, with additional components from Material UI. Our complete (frontend) tech stack is:
- React.js
- Material UI
- Google Maps API


Currently, the local view of running the app should look like this:

![Local view of Greenpeace frontend](/frontend/src/assets/working_home_page.jpg)

## Setup

To create the `.env` file, copy the `.env.example` file, make sure you are in the `frontend` folder and run the following:
```
cp .env.example .env
```
To get the value of `REACT_APP_API_KEY`, ask one of the PMs or tech leads :)

Next, install the necessary packages with the following:

```
npm install
```
Note: Whenever there are new packages introduced to the project, this command will need to be run by everyone pulling the project from Github.

## Running
After the dependencies have been installed, the project is now ready to be run! Use the following:
```
npm start
```
You should see a view similar to that displayed in the Overview.

## Common Issues

### Issue: 
The frontend isn't loading - "Oops! Something went wrong."

### Reason:
If you are seeing something similar to this [view](/frontend/src/assets/error_home_page.jpg). It probably means the `REACT_APP_API_KEY` isn't set up properly.


### Possible Solutions:
- Double check the value of the key is correct (confirm with PMs/tech leads).
- Double check the spelling of the env variable is correct - `process.env.REACT_APP_API_KEY` and `REACT_APP_API_KEY` should be spelled the same.
- Double check the `.env` folder is located under `frontend/` and not `src/`.
- The API key has expired, so a new one will need to be regenerated.

---

### Issue:
`Error: error:0308010C:digital envelope routines::unsupported`

### Reason (Suspected):
The current API and framework isn't compatible with every version of Node.

### Possible Solutions:
- Downgrade the Node version (detailed in https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- **This will require further investigation.**

---

Feel free to add any other issue, or let the leads know!