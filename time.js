const startClock = () => {
  setInterval(renderClock, 1000);
};

const renderClock = () => {
	const today = new Date();
	const h = today.getHours();
	const m = formatTime(today.getMinutes());

	const existingTimeSection = document.getElementById('time');
	if (existingTimeSection) {
		existingTimeSection.parentNode.removeChild(existingTimeSection);
	}

	const wrapper = document.createElement('div');
	wrapper.setAttribute('class', 'timeWrapper');

	wrapper.appendChild(createSpan('hours', h));
	wrapper.appendChild(createSpan('seperator', ':'));
	wrapper.appendChild(createSpan('minutes', m));

	const timeSection = document.createElement('section');
	timeSection.setAttribute('id', 'time');

	timeSection.appendChild(wrapper);
	document.body.appendChild(timeSection);
};

const createSpan = (cls, inner) => {
	const span = document.createElement('span');
	span.setAttribute('class', cls);
	span.innerHTML = inner;
	return span;
};

const formatTime = t => t < 10 ? `0${t}` : t;
