import validate from 'validate.js';
import { reduce, toPairs, last, head } from 'lodash';


const _transform = (errors) => {
	return reduce(toPairs(errors), function(memo, error) {
		memo.push(head(last(error)));
		return memo
	}, []);
};

const addComputer = (computer) => {
	return _transform(validate(computer, {
		name: {
			presence: {
				message: "El nombre es requerido"
			}
		},
		model: {
			presence: {
				message: "El modelo es requerido"
			}
		},
		serie: {
			presence: {
				message: "La serie es requerida"
			}
		},
		price: {
			presence: {
				message: "El precio es requerido",
			},
			numericality: {
				message: "El precio no es numérico"
			}
		}
	}, { fullMessages: false }));
};

const editComputer = () => {

};

export { addComputer, editComputer };