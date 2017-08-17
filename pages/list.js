import { Component } from 'react';
import api from '../api.service';
import ListComputers from '../components/computers/ListComputers';
import { MainLayout } from '../components/layouts/Layouts';


class List extends Component {
	render() {
		const { computers } = this.props;
		return (
			<MainLayout>
				<ListComputers computers={ computers } />
			</MainLayout>
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