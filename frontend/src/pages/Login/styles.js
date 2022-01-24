import styled from 'styled-components';


export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-yellow);
`;

export const Box = styled.div`
	height: calc(90% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: calc(100% - 20px);
	margin: 0 20px;

	@media (min-width: 768px) {
		width: 340px;
		margin: 0;
	}
`
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	top: 0px;
`;
export const Label = styled.label`

`;