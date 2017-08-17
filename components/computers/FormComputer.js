import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api.service';
import { addComputer } from '../../utils/validate.computer';
import { Form, FormControl, ControlLabel, FormGroup, Button, Row, Col } from 'react-bootstrap';


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
			alert("Agregado");
		} else {
			response = await api.put(`computers/${ this.state.id }`, this.state);
			computer_saved = await response.json();
			alert("Actualizado");
		}
	};

	render() {
		const { id, name, model, serie, price } = this.state;

		return (
			<Form onSubmit={ this._onSubmit }>
				<FormGroup>
					<ControlLabel>Nombre</ControlLabel>
					<FormControl name="name" value={ name } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Modelo</ControlLabel>
					<FormControl name="model" value={ model } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Serie</ControlLabel>
					<FormControl name="serie" value={ serie } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Precio</ControlLabel>
					<FormControl name="price" value={ price } onChange={ this._onChange } />
				</FormGroup>

				<Row>
					<Col xs={ 12 } md={ 4 }>
						<FormGroup>
							<Button type="submit" bsStyle="success">Guardar</Button>
						</FormGroup>
					</Col>
					{
						id ? <Col xs={ 12 } md={ 4 }>
							<Button bsStyle="info" href="/list">Ver lista</Button>
						</Col> : null
					}
					<Col xs={ 12 } md={ 4 }>
						<FormGroup>
							<Button bsStyle="link" href="/">Home</Button>
						</FormGroup>
					</Col>
				</Row>
			</Form>
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