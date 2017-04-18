import * as React from 'react';

import './Clock.css';

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
			<section>
					<span className={'time'}>{time}</span>
			</section>
		);
	}
}

export default Clock;
