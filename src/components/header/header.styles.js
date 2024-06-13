import styled from 'styled-components';

const StyledHeader = styled.div`
	font-family: 'Antonio';
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 16px;

	h1 {
		font-size: 28px;
		font-weight: normal;
		padding-left: 24px;
		padding-top: 0px;
		margin: 0;
	}
	img {
		width: 24px;
		height: 17px;
		margin-right: 24px;
		margin-top: 0;
		padding-top: 0;
	}
`;
const StyledHr = styled.hr`
	opacity: 0.3;
	margin-top: 17px;
`;

export { StyledHeader, StyledHr };
