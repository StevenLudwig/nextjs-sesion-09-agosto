import { Component } from 'react';
import api from '../api.service';
import EditComputer from '../components/computers/FormComputer';
import { MainLayout } from '../components/layouts/Layouts';


class Edit extends Component {
	render() {
		const { computer } = this.props;
		return (
			<MainLayout>
				<EditComputer { ...computer } />
			</MainLayout>
		)
	}
};

Edit.getInitialProps = async ({ query }) => {
	const { computer_id } = query;

	const response = await api.get(`computers/${ computer_id }`);
	const computer = await response.json();

	return { computer };
};

export default Edit;