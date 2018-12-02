import { formatProps, createElement } from './helpers/createElement.js';

class Component {
	constructor() {
		this.formatProps = formatProps;
		this.createElement = createElement;
	}
}

export default Component;
