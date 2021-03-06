import fetch from 'isomorphic-unfetch';


const service = (function() {
	const uri = 'http://ec2-52-39-32-242.us-west-2.compute.amazonaws.com/';
	const version = 'v2';

	const base = function(resource) {
		return uri + version + '/' + resource;
	};

	const headers = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	};

	return {
		get(source) {
			return fetch(base(source), {
				method: 'GET',
				headers
			});
		},

		post(source, data) {
			return fetch(base(source), {
				method: 'POST',
				headers,
				body: JSON.stringify(data)
			});
		},

		'delete': (source) => {
			return fetch(base(source), {
				method: 'DELETE',
				headers
			});
		},

		put(source, data) {
			return fetch(base(source), {
				method: 'PUT',
				headers,
				body: JSON.stringify(data)
			});
		}
	};
})();


module.exports = service;
