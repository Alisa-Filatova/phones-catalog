import Component from '../../common/component.js';
import Button from '../../common/components/button.js';

class CatalogItem extends Component {

  constructor(item, onClick) {
    super();
    this.item = item;
    this.onClick = onClick;
  }

  render() {
		const { formatProps, createElement } = this;

    const catalogItem = createElement(
			formatProps('li', { className: 'thumbnail'},
				formatProps('a', { className: 'thumb', href: this.item.id },
					formatProps('img', { src: this.item.imageUrl, alt: this.item.name }),
        ),
				formatProps('a', { href: this.item.id }, this.item.name),
				formatProps('p', {}, this.item.snippet),
      ));

		catalogItem.appendChild(new Button('Add to cart', this.onClick).render());

		return catalogItem;
  }

}

export default CatalogItem;