import React from 'react';

import {
	Container
} from './styles';

const Button = (props) => {

	const onClick = (e) => {
		if (props.onClick) {
			props.onClick();
		}
	}
	return <Container onClick={onClick}>
		{props.text}
	</Container>
}

export default Button;