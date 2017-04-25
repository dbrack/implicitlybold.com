import * as React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Title = styled.h1`
	text-align: center;
	width: 100%;
	font-size: 6em;
`;

const Header = () => {
	return (
		<Section>
			<Title>Hello.</Title>
		</Section>
	);
};

export default Header;
