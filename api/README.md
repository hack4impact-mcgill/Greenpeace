# Greenpeace Backend

## Overview
The backend of the application will ... Our complete (backend) tech stack is:
- TypeScript
- PostgreSQL

## Setup

First, install the necessary packages with the following:

```
npm install
```
Note: Whenever there are new packages introduced to the project, this command will need to be run by everyone pulling the project from Github.

## Running
After the dependencies have been installed, the project is now ready to be run! `cd` to `api` and run the following:
```
npm run debug:watch
```
You should then see the status `Server listening on port 3000`.

## Routes
- getMany: retrieve all the pins in the database
- getOne: retrieve the pin with the given id
- create: create a pin given certain pin properties 
- addReaction: add a reaction to the pin with the given id
- update: update the pin with the given id
- detele: delete the pin with the given id
- deleteReaction: delete the given reaction from the pin with a given id 

## Common Issues

### Issue: 
...

### Reason:
...

### Possible Solutions:
- ...
- ...

---

### Issue:
...

### Reason (Suspected):
...

### Possible Solutions:
- ...
- ...

## Misc
- To access the database, run the command `psql -U greenpeace`

---

Feel free to add any other issue, or let the leads know!