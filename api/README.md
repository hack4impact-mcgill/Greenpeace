# Greenpeace Backend

## Overview
The backend of the application saves user-inputted information about the pins on the map UI. Our complete (backend) tech stack is:
- TypeScript
- PostgreSQL

## Setup

First, install the necessary packages with the command `npm install`.

Note: whenever new packages are added to the project, developers pulling from GitHub must re-run this command.

## Running
After the dependencies are installed, you can run the project. In the `api` director, run the following command `npm run debug:watch`.

You should then see the status "Server listening on port 3000."

## Methods

### GET
- `/`: retrieve all the pins in the database
- `/{id}`: retrieve the pin with the given id

### POST
- `/`: create a pin with the given pin properties 

### PUT
- `/{id}/{reaction}`: add a reaction to the pin with the given id
- `/{id}`: update the pin with the given id

### DELETE
- `/{id}`: delete the pin with the given id
- `/{id}/{reaction}`: delete the given reaction from the pin with the given id 

## Common Issues

### Issue: 
When trying to run the project, you receive the following error messages:
- "Unable to compile TypeScript"
- "Object liteal may only specify known properties, but [ABC] does not exist in type"
- "Did you mean to write [XYZ]?"

### Reason (Suspected):
It is possible you have not migragted the database with the updated Prisma schema.

### Possible Solutions:
- In your terminal, run the command `npx prisma migrate dev`

## Misc
- To access the database, run the command `psql -U greenpeace`

Feel free to add any other issue, or let the leads know!