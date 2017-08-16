import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api.service';


const Item = ({ name, model, price, _id, onClick }) => (
	<tr>
		<td>{ name }</td>
		<td>{ model }</td>
		<td>{ price }</td>
		<td>
			<a href={ `/edit/${ _id }` }>Editar</a>
		</td>
		<td>
			<button onClick={ onClick } value={ _id }>Eliminar</button>
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
			<table>
				<thead>
					<tr>
						<td>Nombre</td>
						<td>Modelo</td>
						<td>Precio</td>
						<td>Editar</td>
						<td>Eliminar</td>
					</tr>
				</thead>
				<tbody>
				{
					this.state.computers.map(computer => {
						return <Item key={ computer._id } { ...computer } onClick={ this._onRemove } />
					})
				}
				</tbody>
			</table>
		)
	};
};

List.propTypes = {
	computers: PropTypes.array.isRequired
};

export default List;