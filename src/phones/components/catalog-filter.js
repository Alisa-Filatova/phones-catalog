import Component from '../../common/component.js';

const FILTER_ITEMS = [
	{ name: 'All', value: 'all' },
	{ name: 'Alphabetical', value: 'name' },
	{ name: 'Newest', value: 'age' }
];

class CatalogFilter extends Component {

  render() {
		const { formatProps, createElement } = this;

		const wrapper = createElement(formatProps('div', {},
			formatProps('span', {}, 'Sort by: '),
		));

		const select = createElement(formatProps('select', {},
			formatProps('select', { className: 'filter'}),
		));

		FILTER_ITEMS.forEach(item => {
			select.appendChild(createElement(
				formatProps('option', { value: item.value }, item.name)
			));
		});

		wrapper.appendChild(select);

		return wrapper;
	}

}

export default CatalogFilter;