import Component from '../../common/component.js';
import CatalogItem from './catalog-item.js';

class Catalog extends Component {

  constructor(items) {
    super();
    this.items = items;
  }

  render() {
    const catalogBox = this.createElement(
      this.formatProps('ul', { className: 'phones' })
    );

    this.items.forEach(item => {
      catalogBox.appendChild(new CatalogItem(item).render());
    });

    return catalogBox;
  }
}

export default Catalog;
