import * as React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Time = styled.span`
	width: 100%;
	text-align: center;
	font-size: 2em;
`;

interface State {
	time: number;
}

class Clock extends React.Component<{}, State> {
	private timer: number;

	constructor() {
		super();
		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		this.timer = window.setInterval(() => {
			this.setState((previousState) => {
				return {
					...previousState,
					time: Date.now()
				};
			});
		}, 1000);
	}

	componentWillUnmount() {
		window.clearInterval(this.timer);
	}

	render() {
		const time = new Date(this.state.time).toLocaleTimeString('en-US');
		return (
			<Section>
					<Time>{time}</Time>
			</Section>
		);
	}
}

export default Clock;
