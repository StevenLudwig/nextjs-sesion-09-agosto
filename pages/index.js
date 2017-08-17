import { Component } from 'react';
import { MainLayout } from '../components/layouts/Layouts';
import { Panel } from 'react-bootstrap';


class Index extends Component {
	render() {
		return (
			<MainLayout>
				<Panel header={ <h4>Sesión 16 agosto</h4> } bsStyle="primary">
					<a href="/add">Agregar computadora</a>
					<hr />
					<a href="/list">Listar todas</a>
				</Panel>
			</MainLayout>
		)
	}
};

export default Index;