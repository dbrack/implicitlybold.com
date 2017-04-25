import * as React from 'react';
import Clock from './Clock';
import Header from './Header';
import {injectGlobal} from 'styled-components';

/* tslint:disable:no-unused-expression */
injectGlobal`
	body {
		background: #000;
		height: 100%;
		margin: 0;
		font: 16px Helvetica, sans-serif;
		color: #efefef;
	}
`;
/* tslint:enable:no-unused-expression */

const App = () => {
	return (
		<div>
			<Header />
			<Clock />
		</div>
	);
};

export default App;
