import { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid } from 'react-bootstrap';
// import Header from '../Header/Header';


class MainLayout extends Component {
	render() {
		const { children, title } = this.props;

		return (
			<div>
				<Head>
					<title>{ title || 'Sesión 16 agosto' }</title>
					<meta charSet='utf-8' />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />

					<link	rel="stylesheet" href="https://necolas.github.io/normalize.css/7.0.0/normalize.css" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
				</Head>

				<Grid>
					{ children }
				</Grid>
			</div>
		)
	}
};

MainLayout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export { MainLayout };