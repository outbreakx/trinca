import React from 'react';

import {
	Container,
	ModalHeader,
	ModalTitle,
	ModalExit,
	ModalContent,
	Icon,
} from './styles';

const Modal = (props) => {
	return <Container open={props.open}>
		<ModalHeader>
			<ModalTitle>
				{props.title}
			</ModalTitle>
			<ModalExit onClick={props.onExit}>
				<Icon className="fas fa-times" />
			</ModalExit>
		</ModalHeader>
		<ModalContent>
			{props.content}
		</ModalContent>
	</Container>
}

export default Modal;