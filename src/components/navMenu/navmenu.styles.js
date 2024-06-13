import styled from 'styled-components';

const StyledNavMenu = styled.nav`
	position: absolute;
	opacity: ${({ $visibleNav }) => ($visibleNav ? 1 : 0)};
	transition: opacity 0.3s ease;
	pointer-events: ${({ $visibleNav }) => ($visibleNav ? 'auto' : 'none')};
	width: 100%;
	color: white;
	background-color: #070724;
	height: 100%;
	margin-top: 10px;

	z-index: 2;
	ul {
		list-style: none;
		padding: 0;
	}

	hr {
		margin: 0 auto;
		width: 80%;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
`;

const StyledLi = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin-left: 24px;
	margin-right: 24px;
	font-family: 'League Spartan';
	font-size: 15px;
	font-weight: bold;

	&::before {
		content: '';
		width: 20px;
		height: 20px;
		background-color: ${({ $color }) => $color};
		border-radius: 50%;
	}

	a {
		text-decoration: none;
		color: inherit;
		text-align: left;
		margin-right: 130px;
		width: 110px;
	}

	img {
		width: 4px;
		height: 8px;
	}
`;

const StyledHr = styled.hr`
	margin: 0;
	border: 1px solid #ccc;
	opacity: 0.3;
`;
export { StyledNavMenu, StyledLi, StyledHr };
