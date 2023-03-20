--  half of this is postgresql and half mysql and half idk this is just a reference point for the table structures --


CREATE TABLE USER(
    email VARCHAR(255) PRIMARY key,
    validated BOOLEAN NOT NULL,
    create_time DATE NOT NULL,
    is_flagged BOOLEAN NOT NULL,
    is_admin BOOLEAN NOT NULL
);


CREATE TYPE Reaction AS ENUM ('like', 'dislike', 'neutral');

CREATE table Reaction (
    `reaction` Reaction NOT NULL,
);

CREATE TYPE Category AS ENUM ('restaurant', 'park', 'clothing store', 'grocery store', 'book store' 'other');

CREATE TABLE Pin (
    `id` int NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `coordinate_x` float NOT NULL,
    `coordinate_y` float NOT NULL,
    `is_valid` boolean NOT NULL,
    `category` Category NOT NULL,
    `created_time` datetime NOT NULL,
    `address` varchar(1000) NOT NULL,
)
