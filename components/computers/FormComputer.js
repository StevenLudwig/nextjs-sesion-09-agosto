import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api.service';
import { addComputer } from '../../utils/validate.computer';


class FormComputer extends Component {
	constructor(props) {
		super(props);

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);

		this.state = {
			id: props._id,
			name: props.name,
			model: props.model,
			serie: props.serie,
			price: props.price
		};
	};

	_onChange(e) {
		const target = e.currentTarget;
		this.setState({
			[target.name]: target.value
		});
	}

	async _onSubmit(e) {
		e.preventDefault();

		/**
		 * validar antes de guardar, la forma de validar es a criterio
		 * así como el uso de una librería externa js.
		 */
		const errors = addComputer(this.state);
		if (errors.length) return console.log(errors);

		var response = '';
		var computer_saved = '';

		if (!this.state.id) {
			response = await api.post('computers', this.state);
			computer_saved = await response.json();
			console.log(computer_saved)
		} else {
			response = await api.put(`computers/${ this.state.id }`, this.state);
			computer_saved = await response.json();
			console.log(computer_saved);
		}
	};

	render() {
		const { name, model, serie, price } = this.state;

		return (
			<form onSubmit={ this._onSubmit } >

				<label htmlFor="">Nombre</label>
				<input type="text" name="name" value={ name } onChange={ this._onChange } />

				<label htmlFor="">Modelo</label>
				<input type="text" name="model" value={ model } onChange={ this._onChange } />

				<label htmlFor="">Serie</label>
				<input type="text" name="serie" value={ serie } onChange={ this._onChange } />

				<label htmlFor="">Precio</label>
				<input type="text" name="price" value={ price } onChange={ this._onChange } />

				<button type="submit">Guardar</button>
				<a href="/">Home</a>
			</form>
		)
	}
};

FormComputer.defaultProps = {
	id: '',
	name: '',
	model: '',
	serie: '',
	price: 0
};

FormComputer.propTypes = {
	_id: PropTypes.string,
	name: PropTypes.string,
	model: PropTypes.string,
	serie: PropTypes.string,
	price: PropTypes.number
};

export default FormComputer;