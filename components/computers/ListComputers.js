import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api.service';
import { Table, Button } from 'react-bootstrap';


const Item = ({ name, model, price, _id, onClick }) => (
	<tr>
		<td>{ name }</td>
		<td>{ model }</td>
		<td>{ price }</td>
		<td>
			<a href={ `/edit/${ _id }` }>Editar</a>
		</td>
		<td>
			<Button onClick={ onClick } value={ _id } bsStyle="danger">
				<span className="glyphicon glyphicon-trash"></span>
			</Button>
		</td>
	</tr>
);


class List extends Component {
	constructor(props) {
		super(props);

		this._onRemove = this._onRemove.bind(this);
		this.state = {
			computers: props.computers
		};
	};

	async _onRemove(e) {
		const id = e.currentTarget.value;
		const response = await api.delete(`computers/${ id }`);
		this._getComputers();
	};

	async _getComputers() {
		const response = await api.get('computers');
		const computers = await response.json();
		this.setState({ computers });
	};

	render() {
		return (
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Modelo</th>
						<th>Precio</th>
						<th>Editar</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
				{
					this.state.computers.map(computer => {
						return <Item key={ computer._id } { ...computer } onClick={ this._onRemove } />
					})
				}
				</tbody>
			</Table>
		)
	};
};

List.propTypes = {
	computers: PropTypes.array.isRequired
};

export default List;