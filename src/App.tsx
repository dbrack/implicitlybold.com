import * as React from 'react';
import Clock from './Clock';
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
	background: #000;
	height: 100%;
	margin: 0;
	font: 16px Helvetica, sans-serif;
	color: #efefef;
}
`;

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Clock />
			<GlobalStyle />
		</React.Fragment>
	);
};

export default App;
