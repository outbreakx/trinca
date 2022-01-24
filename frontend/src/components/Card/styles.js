import styled from 'styled-components';


export const Container = styled.div`
	position: relative;
	display: flex;
	
	background-color: green;
	margin: 10px 5px;
	@media (min-width: 768px) {
		width: 150px;
	}
	@media (min-width: 1024px) {
		width: 180px;
	}
	cursor: pointer;
	user-select: none;
`;
export const CardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--color-grey);
`;

export const DetailContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 7px 0;
	padding: 5px;
`;

export const Date = styled.div`
	font-weight: bold;
	font-size: 1.7rem;
`;
export const Title = styled.div`

`;

export const TotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px;
`

export const TotalPeople = styled.div`
	font-weight: bold;
`;

export const TotalAmount = styled.div`

`;

export const Icon = styled.i`
	font-size: 16px;
	color: var(--color-yellow);
`;

export const ActionContainer = styled.div`
	display: flex;
	position: absolute;
	right: 5px;
	top: 5px;
	z-index: 10000;
`;