import { Component } from 'react';
import { MainLayout } from '../components/layouts/Layouts';


class Index extends Component {
	render() {
		return (
			<MainLayout>
				<a href="/add">Agregar computadora</a> <br/>
				<a href="/list">Listar todas</a>
			</MainLayout>
		)
	}
};

export default Index;