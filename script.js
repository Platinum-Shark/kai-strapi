const floors = [2, 3, 4, 5, 6, 7, 8, 9]
const apts = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']
const axios = require('axios');
const run = async () => {
	for (const floor of floors) {
		for (const apt of apts) {
			const aptNumber = String(floor) + String(apt)
			const body = {
				data: {
					Number: aptNumber,
					Available: true
				}
			}

			console.log(body)
	
			let data = JSON.stringify(body);
			  
			  let config = {
				method: 'post',
				maxBodyLength: Infinity,
				url: 'http://127.0.0.1:1337/api/apartments',
				headers: { 
				  'Content-Type': 'application/json', 
				  'Cookie': 'upscaleFormsToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzMDM4OTgxLCJleHAiOjE2ODM2NDM3ODF9.FKEIV2IyNfifYVczpzYdZIQMsJB0GKc6MufCQzo8yOY'
				},
				data : data
			  };
			  
			  await axios.request(config)
			  .then((response) => {
				console.log(JSON.stringify(response.data));
			  })
			  .catch((error) => {
				console.log(error);
			  });
			  
		}
	}
}

run()
