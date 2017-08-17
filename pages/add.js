import { Component } from 'react';
import AddComputer from '../components/computers/FormComputer';
import { MainLayout } from '../components/layouts/Layouts';


class Add extends Component {
	render() {
		return (
			<MainLayout>
				<AddComputer />
			</MainLayout>
		)
	};
};

export default Add;