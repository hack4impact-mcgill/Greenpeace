# Greenpeace Backend

## Overview

The backend of the application will contain the API endpoints in order for the frontend to interact with the database, as well as the ORM logic mapping the database models to its counterpart in the JS code. Our tech stack is:
- Javascript/Typescript
- PostgresSQL
- TypeORM
- Docker

The current database schema is:
![DB schema](/backend/assets/db_schema.png)

Note: This is subject to change.

## Setup

To create the .env file, copy the .env.example file, make sure you are in the frontend folder and run the following:
```
cp .env.example .env
```

To get the value of the env variables, ask one of the PMs or tech leads :)

## Running

To run the project, run the following:
```
docker compose up
```
Note: This will require your Docker daemon to be running. An easy way to ensure this is to download the Docker desktop app and have it open.

Note #2: This also requires a working `Dockerfile` and `docker-compose.yml` :-)

## Common Issues

If you have any issues, add them here!
