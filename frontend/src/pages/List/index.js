import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import barbecueService from "../../services/barbecueService";

import Card from "../../components/Card";
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Container,
	CardsContainer,
	NewBarbecueContainer,
	IconResponsive,
	ModalContainer,
	InputContainer,
	Label
} from './styles';


const List = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [barbecues, setBarbecues] = useState([]);
	const [name, setName] = useState('');
	const [date, setDate] = useState(new window.Date().toISOString().substring(0, 10));
	const [description, setDescription] = useState('');
	const [oberservation, setObservation] = useState('');

	useEffect(() => {
		barbecueService.list().then(res => {
			if (res.data) {
				setBarbecues(res.data);
			}
		})
	}, []);

	const navigate = useNavigate();

	const ModalContent = () => {
		return <ModalContainer>
			<InputContainer>
				<Label htmlFor="name">Name</Label>
				<Input placeholder="Name" text={name} onChange={e => setName(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Label htmlFor="date">Date</Label>
				<Input type="date" placeholder="Date" text={date} onChange={e => setDate(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Label htmlFor="description">Description</Label>
				<Input type="text" placeholder="Description" text={description} onChange={e => setDescription(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Label htmlFor="observation">Additional observations</Label>
				<Input type="text" placeholder="Additional observations" text={oberservation} onChange={e => setObservation(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Button text="Save" onClick={onAddNewBarbecue}></Button>
			</InputContainer>
		</ModalContainer>
	}

	const onClick = (id) => {
		navigate(`/details/${id}`);
	}
	const onNewUBarbecue = () => {
		setModalOpen(true)
	}
	const onModalExit = () => {
		setModalOpen(false);
	}
	const onAddNewBarbecue = () => {
		barbecueService.create(name, description, oberservation, date).then(res => {
			if (res.data) {
				setBarbecues([...barbecues, res.data]);
			}
			setName('');
			setDate('');
			setDescription('');
			setObservation('');
			setModalOpen(false);
		});
	}
	const onAction = (id) => {
		console.log("delete:", id);
		barbecueService.delete(id).then(res => {
			let tBarbecues = [...barbecues];
			tBarbecues = tBarbecues.filter(x => x._id !== id);
			setBarbecues(tBarbecues);
		})
	}
	return <Container>
		<Modal open={isModalOpen} onExit={onModalExit} title={"New Barbecue"} content={ModalContent()} />
		<NewBarbecueContainer>
			<IconResponsive className="fas fa-circle-plus" onClick={onNewUBarbecue}></IconResponsive>
		</NewBarbecueContainer>
		<CardsContainer>
			{barbecues.map(item => <Card key={item._id} id={item._id} onClick={onClick} item={item} onAction={onAction} />)}
		</CardsContainer>
	</Container>
}

export default List;