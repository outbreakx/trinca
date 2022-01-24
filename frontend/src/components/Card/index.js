import React from 'react';


import {
	Container,
	CardContainer,
	DetailContainer,
	Date,
	Title,
	TotalContainer,
	TotalPeople,
	TotalAmount,
	Icon,
	ActionContainer
} from './styles';

const Card = (props) => {
	return <Container>
		<ActionContainer onClick={() => props.onAction(props.item._id)}>
			<Icon className="fas fa-trash" style={{ color: 'red' }}></Icon>
		</ActionContainer>
		<CardContainer onClick={() => props.onClick(props.id)}>
			<DetailContainer>
				<Date>{new window.Date(props.item.date).toISOString().substring(0, 10)}</Date>
				<Title>{props.item.name}</Title>
			</DetailContainer>
			<TotalContainer>
				<TotalPeople><Icon className="fas fa-user-friends" /> {props.item.totalParticipants || 0}</TotalPeople>
				<TotalAmount><Icon className="fas fa-dollar-sign" /> R$ {props.item.totalAmount || 0}</TotalAmount>
			</TotalContainer>
		</CardContainer>
	</Container>
}

export default Card;