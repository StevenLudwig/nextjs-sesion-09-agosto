import { Component } from 'react';
import api from '../api.service';


const Item = props => (
	<li>{ `${ props.name }: $ ${ props.price }` }</li>
);

class List extends Component {
	render() {
		const { computers } = this.props;

		return (
			<div>
				<ul>
				{
					computers.map(computer => {
						return <Item key={ computer._id } { ...computer }></Item>
					})
				}
				</ul> <br/>
				<a href="/">Home</a> <br/>
				<a href="/add">Agregar nueva</a>
			</div>
		)
	}
};


List.getInitialProps = async () => {
	const data = {};

	const computers_reponse = await api.get('computers');
	const computers = await computers_reponse.json();

	data.computers = computers;

	return { ...data }
};

export default List;