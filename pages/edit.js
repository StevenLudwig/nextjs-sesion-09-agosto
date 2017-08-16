import { Component } from 'react';
import api from '../api.service';
import EditComputer from '../components/computers/FormComputer';


class Edit extends Component {
	render() {
		const { computer } = this.props;
		return <EditComputer { ...computer } />
	}
};

Edit.getInitialProps = async ({ query }) => {
	const { computer_id } = query;

	const response = await api.get(`computers/${ computer_id }`);
	const computer = await response.json();

	return { computer };
};

export default Edit;