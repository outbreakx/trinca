import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Container,
	Title
} from './styles';

const Header = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate('/');
	}
	return <Container>
		<Title onClick={goHome}>Barbecue Schedule</Title>
	</Container>
}

export default Header;