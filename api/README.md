# Greenpeace Backend

## Overview
The backend of the application saves user-inputted information about the pins on the map. The complete (backend) tech stack is:
- TypeScript
- PostgreSQL

## Setup

First, install the necessary packages with the command `npm install`.

> Note: whenever new packages are added to the project, re-run this command.

## Running
After the dependencies are installed, you can run the project. In the `api` directory, run the following command `npm run debug:watch`. You should then see the status *Server listening on port 3000*.

## Pin properties
| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `id`          | `Int`     | The unique ID of the pin |
| `name`        | `String`  | A short description of the pin, like `"Joe's Pizza"` |
| `description` | `String`  | A longer description of the pin, like `"The best pizza + they donate leftovers to local shelters"` |
| `coordinateX` | `Float`   | The x-coordinate of the pin's location on the map |
| `coordinateY` | `Float`   | The y-coordinate of the pin's location on the map |
| `isValid`     | `Boolean` | If the pin is valid |
| `createdAt`   | `DateTime`| The time of the pin's creation |
| `category`    | `String`  | A descriptive category for the pin, like `"Restaurant"` |
| `reactions`   | `String[]`| A list of reactions to the given pin, like `["Like", "Heart", "Good Value"]` |

## Methods

### GET
| Route   | Description                        |
| ------- | ---------------------------------- |
| `/`     | Retrieve all pins in the database  |
| `/{id}` | Retrieve the pin with the given id |

### POST
| Route   | Description                        |
| ------- | ---------------------------------- |
| `/`     | Create a pin with the given pin properties (passed in the body of the request) |

### PUT
| Route              | Description                                 |
| ------------------ | ------------------------------------------- |
| `/{id}/{reaction}` | Add a reaction to the pin with the given id |
| `/{id}`            | Update the pin with the given id with the given pin properties (passed in the body of the request) |

### DELETE
| Route              | Description                                 |
| ------------------ | ------------------------------------------- |
| `/{id}`            | Delete the pin with the given id            |
| `/{id}/{reaction}` | Delete the given reaction from the pin with the given id |

## Common issues

### Issue 
When trying to run the project, you receive the following error messages:
- *Unable to compile TypeScript*
- *Object literal may only specify known properties, but "ABC" does not exist in type*
- *Did you mean to write "XYZ"?*

### Reason (suspected)
It is possible you have not migragted the database with the updated Prisma schema.

### Possible solution
In your terminal, run the command `npx prisma migrate dev`.

## Misc
- To directly access the database, run the command `psql -U greenpeace`