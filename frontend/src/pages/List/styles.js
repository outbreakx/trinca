import styled from 'styled-components';


export const Container = styled.div`

`;


export const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(180px, 1fr));
	column-gap: 10px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		margin: 0 5%;
	}
`;

export const IconResponsive = styled.i`
	font-size: 48px;
	padding: 0 7px;
	color: green;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
	z-index: 10001;
`;

export const NewBarbecueContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	margin: 10px 0;
	justify-content: flex-end;
	align-items: center;

	@media (min-width: 768px) {
		position: initial;
		display: flex;
		margin: 10px 5%;
		justify-content: center;
		align-items: center;
		justify-content: initial;
		align-items: initial;
	}

	cursor: pointer;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 20px);
	margin: 0 10px;
	justify-content: center;
	height: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`
export const Label = styled.label`

`;