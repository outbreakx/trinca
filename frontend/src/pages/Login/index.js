import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Box,
	InputContainer,
	Container,
	Label,
} from './styles';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const onLogin = () => {
		console.log("email:", email);
		console.log("password:", password);
		navigate(`/list`);
	}

	return <Container>
		<Box>
			<InputContainer>
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder='Email' text={email} onChange={e => setEmail(e.target.value)} />
			</InputContainer>

			<InputContainer>
				<Label htmlFor="password">Password</Label>
				<Input type="password" id="password" placeholder='Password' text={password} onChange={e => setPassword(e.target.value)} />
			</InputContainer>

			<Button text="Login" onClick={onLogin} />
		</Box>
	</Container>
}


export default Login;