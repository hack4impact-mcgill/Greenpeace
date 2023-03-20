// creating end points for pins


import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";


// GET

export const fakeGETPin = () => {
	return fetch('http://localhost:5001/test', {
		method: 'GET'
	}).then((response) => {
		console.log(response);
	})
};

// POST

export const fakePOSTPin = () => {
	return fetch(URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({ test: 'POST' })
	}).then((response) => {
		console.log(response);
	})
};

// PUT

export const fakePUTPin = () => {
	return fetch(URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'PUT',
		body: JSON.stringify({ test: 'PUT' })
	}).then((response) => {
		console.log(response);
	})
};

// DELETE

export const fakeDELETEPin = () => {
    return fetch(URL, {
        method: 'DELETE'
    }).then((response) => {
        console.log(response);
    })
};

export default router;