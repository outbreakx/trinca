import React, { useState } from 'react';

import {
	Container
} from './styles';

const Input = (props) => {
	const handleChange = (e) => {
		if (props.onChange) {
			props.onChange(e.target.value);
		}
	}
	return <Container value={props.text} onChange={handleChange} {...props} />
}

export default Input;