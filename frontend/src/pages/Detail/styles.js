import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	background-color: var(--color-grey);
`;

export const DetailHeader = styled.div`
	width: calc(100% - 20px);
	justify-content: space-between;
	display: flex;
	padding: 0 10px;
	margin: 10px 0;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CountContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px 0;
	padding: 0 0px;
`;

export const Date = styled.div`
	font-weight: bold;
	font-size: 1.7rem;
`;
export const Title = styled.h3`

`;
export const Description = styled.div`

`;
export const Observation = styled.div`

`;

export const TotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px;
	align-items: center;
`

export const TotalPeople = styled.div`
	font-weight: bold;
	margin-left: -6px;
`;

export const TotalAmount = styled.div`

`;
export const Icon = styled.i`
	font-size: 16px;
	padding: 0 7px;
	color: var(--color-yellow);
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


export const IconContainer = styled.div`
	position: relative;
	display: flex;
`;

export const DetailContent = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 20px);
	padding: 0;
`;

export const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-yellow);
`;

export const ItemFirstHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 0;
`;
export const ItemCheck = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: 1px solid green;
	background-color: ${(props) => props.checked ? 'yellow' : 'initial'};
	cursor: pointer;
`;

export const ItemName = styled.div`
	margin-left: 10px;
`;

export const ItemAmount = styled.div`
	text-decoration: ${(props) => props.checked ? 'line-through' : 'initial'};
`;

export const NewUserContainer = styled.div`
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
		margin: 10px 0;
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

export const ActionContainer = styled.div`
	display: flex;
	cursor: pointer;
`;