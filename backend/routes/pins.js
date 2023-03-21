// creating end points for pins


// GET 
export const getPin = (id) => {
	return fetch(`http://localhost:5001/test/${id}`, {
		method: 'GET'
	}).then((response) => {
		return response.json();
	}).catch((error) => {
		console.error('Error:', error);
	  });
};

// POST
export const postPin = (pinData) => {
	return fetch(`http://localhost:5001`, {
		headers: {
		  'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(pinData)
	  }).then((response) => {
		console.log(response);
	  }).catch((error) => {
		console.error('Error:', error);
	  });
};

// DELETE
export const DELETEPin = (id) => {
    return fetch(`http://localhost:5001/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        console.log(response);
    })
};

export default router;