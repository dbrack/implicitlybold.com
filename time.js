const startClock = () => {
    const today = new Date();
    const h = today.getHours();
    const m = formatTime(today.getMinutes());

    const existingTimeSection = document.getElementById('time');
    if (existingTimeSection) {
        existingTimeSection.parentNode.removeChild(existingTimeSection);
    }

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'timeWrapper');

    createSpan('hours', h, wrapper);
    createSpan('seperator', ':', wrapper);
    createSpan('minutes', m, wrapper);

    const timeSection = document.createElement('section');
    timeSection.setAttribute('id', 'time');

    timeSection.appendChild(wrapper);
    document.body.appendChild(timeSection);

    const t = setTimeout(startClock, 1000);
};

const createSpan = (cls, inner, node) => {
    const span = document.createElement('span');
    span.setAttribute('class', cls);
    span.innerHTML = inner;
    node.appendChild(span);
};

const formatTime = (t) => {
    if (t < 10) {
        t = `0${t}`;
    };
    return t;
};
