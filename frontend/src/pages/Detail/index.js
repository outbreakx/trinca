import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import barbecueService from '../../services/barbecueService';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Container,
	DetailContainer,
	DetailHeader,
	InfoContainer,
	CountContainer,
	Title,
	Description,
	Observation,
	Date,
	TotalPeople,
	TotalAmount,
	Icon,
	IconResponsive,
	IconContainer,
	ItemContainer,
	ItemFirstHeader,
	ItemCheck,
	ItemName,
	ItemAmount,
	NewUserContainer,
	ModalContainer,
	InputContainer,
	Label
} from './styles';
import participantService from '../../services/participantService';

const DetailItem = (participant, index, onCheck) => {
	return <ItemContainer key={index}>
		<ItemFirstHeader>
			<ItemCheck checked={participant.confirmed} onClick={() => onCheck(index)} />
			<ItemName>{participant.name}</ItemName>
		</ItemFirstHeader>
		<ItemAmount checked={participant.confirmed}>R$ {participant.amount}</ItemAmount>
	</ItemContainer>
}


const Detail = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [barbecue, setBarbecue] = useState({});
	const [name, setName] = useState('');
	const [amount, setAmount] = useState(0);

	const [participants, setParticipants] = useState([]);

	const params = useParams();

	const ModalContent = () => {
		return <ModalContainer>
			<InputContainer>
				<Label htmlFor="name">Name</Label>
				<Input placeholder="Name" text={name} onChange={e => setName(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Label htmlFor="amount">Amount</Label>
				<Input type="number" placeholder="Amount" text={amount} onChange={e => setAmount(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Button text="Save" onClick={onAddNewUser}></Button>
			</InputContainer>
		</ModalContainer>
	}

	useEffect(() => {
		barbecueService.get(params.id).then(res => {
			if (res.data) {
				setBarbecue(res.data);
			}
		});
		participantService.list(params.id).then(res => {
			if (res.data) {
				setParticipants(res.data);
			}
		});
	}, [params.id]);

	const onAddNewUser = () => {
		participantService.create(name, amount, params.id).then(res => {
			if (res.data) {
				setParticipants([...participants, res.data]);
			}
			setName('');
			setAmount(0);
			setModalOpen(false);
		});
	}

	const onCheck = (index) => {
		let tParticipants = [...participants];
		tParticipants[index].confirmed = !tParticipants[index].confirmed;

		setParticipants(tParticipants);
		participantService.update(tParticipants[index]._id, tParticipants[index].confirmed).then(res => {

		});
	}
	const onNewUser = () => {
		setModalOpen(true)
	}
	const onModalExit = () => {
		setModalOpen(false);
	}

	return <Container>
		<Modal open={isModalOpen} onExit={onModalExit} title={"New User"} content={ModalContent()} />
		<NewUserContainer>
			<IconResponsive className="fas fa-circle-plus" onClick={onNewUser}></IconResponsive>
		</NewUserContainer>
		<DetailContainer>
			<DetailHeader>
				<InfoContainer>
					<Date>{new window.Date(barbecue?.date).toLocaleDateString()}</Date>
					<Title>{barbecue.name}</Title>
					<Description>{barbecue.description}</Description>
					<Observation>{barbecue.observation}</Observation>
				</InfoContainer>
				<CountContainer>
					<IconContainer>
						<Icon className="fas fa-user-friends" style={{ marginLeft: -2 }} />
						<TotalPeople>{participants.length}</TotalPeople>
					</IconContainer>
					<IconContainer>
						<Icon className="fas fa-dollar-sign" />
						<TotalAmount>R$ {participants.map(item => item.confirmed ? item.amount : 0).reduce((a, b) => a + b, 0)}</TotalAmount>
					</IconContainer>
				</CountContainer>
			</DetailHeader>

			<DetailContainer>
				{participants.map((item, index) => DetailItem(item, index, onCheck))}
			</DetailContainer>
		</DetailContainer>
	</Container>
}

export default Detail;