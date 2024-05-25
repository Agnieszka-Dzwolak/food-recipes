import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const addEvent = () => {
    dom.btn.addEventListener('click', (e) => {
        addHandler(e);
    });
};

export default addEvent;
