import Component from '../../common/component.js';

class Sidebar extends Component {

	constructor(children) {
		super();
		this.children = children;
	}

	render() {
		const sidebar = this.createElement(this.formatProps('div', { className: 'sidebar' }));

		if (this.children) {
			sidebar.appendChild(this.children);
		}

		return sidebar;
	}
}

export default Sidebar;