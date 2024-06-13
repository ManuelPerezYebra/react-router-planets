import styled from 'styled-components';

const StyledImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 95px;
	margin-bottom: 98px;
	padding: 0px;
	img {
		width: 111px;
	}
`;
const Content = styled.div`
	text-align: center;
	margin-left: 24px;
	margin-right: 24px;
	font-family: 'Antonio';
	color: white;
	h1 {
		font-weight: lighter;
		font-size: 40px;
	}
	p {
		font-family: 'League Spartan';
		font-size: 11px;
		line-height: 22px;
		text-align: center;
	}
`;
const Source = styled.div`
	color: white;
	justify-content: center;
	display: flex;
	gap: 5px;
	opacity: 50%;
	font-weight: lighter;
	font-family: 'League Spartan';

	img {
		width: 15px;
	}
	a {
		text-decoration: underline;
	}
`;
const Info = styled.div`
	display: flex;
	color: white;
	justify-content: space-between;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.3);
	margin-left: 24px;
	margin-right: 24px;
	margin-bottom: 8px;

	h1 {
		font-size: 20px;
		font-family: 'Antonio';
		font-weight: normal;
		margin-right: 24px;
	}
	p {
		font-size: 10px;
		margin-left: 24px;
		opacity: 50%;
		font-weight: normal;
		font-family: 'League Spartan';
	}
`;
const GeologyImg = styled.div`
	position: absolute;
	width: 70px;
	top: 40%;
`;
export { StyledImgContainer, Content, Source, Info, GeologyImg };
