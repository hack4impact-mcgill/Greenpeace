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

// pinData is an object with the following properties:
// {
// 	id: 123,
// 	name: 'New Pin',
// 	description: 'This is a new pin',
// 	coordinate_x: 1.234,
// 	coordinate_y: 5.678,
// 	is_valid: true,
// 	category: 'Example Category',
// 	created_time: '2023-03-21T12:34:56Z',
// 	address: '123 Example St, City, State ZIP'
// }

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