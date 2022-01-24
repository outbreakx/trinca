import styled from 'styled-components';


export const Container = styled.div`
	width: 350px;
	position: fixed;
	display: flex;
	flex-direction: column;
	background-color: var(--color-grey);
	height: 80%;
	top:50%;
  left: ${({open}) => open ? '50%' : '-50%'};
  transform: translate(-50%,-50%);
	z-index: 10001;

	transition: left .75s ease-in-out;

	@media (min-width: 768px) {
		top: ${({open}) => open ? '50%' : '-50%'};
		left: 50%;
		transition: top .75s ease-in-out;
	}
`;


export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
`;
export const ModalTitle = styled.h3`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const ModalExit = styled.div`
	cursor: pointer;
`;
export const ModalContent = styled.div`
	width: 100%;
	height: 100%;
`;

export const Icon = styled.i`
	font-size: 32px;
	padding: 0 7px;
`;