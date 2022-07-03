import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import logo from './logo.jpeg';


const header = props => (
	<div className='app-header'>
		<div style={{display: "inline-flex"}}>
			<p>Version: {props.version}</p>
			<img alt='aws_logo' className='app-header image' src={logo} ></img>
		</div>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class header extends React.Component {
//   render() {
//     return <div>This is a component called header.</div>;
//   }
// }

const headerPropTypes = {
	// always use prop types!
};

header.propTypes = headerPropTypes;

export default header;
