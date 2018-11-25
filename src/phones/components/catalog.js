import CatalogItem from './catalog-item.js';

class Catalog {

  constructor(items) {
    this.items = items;
  }

  render() {
    const catalogBox = document.createElement('ul');
    catalogBox.className = 'phones';

    this.items.forEach(item => {
      const catalogItem = new CatalogItem(item).render();
      catalogBox.insertAdjacentElement('afterbegin', catalogItem);
    });

    return catalogBox;
  }
}
export default Catalog;
