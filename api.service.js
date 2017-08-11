import fetch from 'isomorphic-unfetch';


const service = (function() {
	const uri = '';
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
			return fetch(base(source));
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
				method: 'DELETE'
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