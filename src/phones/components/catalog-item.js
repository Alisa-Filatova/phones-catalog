import Button from '../../common/components/button.js';

class CatalogItem {

  constructor(item, onClick) {
    this.item = item;
    this.onClick = onClick;
  }

  render() {
    const catalogItem = document.createElement('li');
    catalogItem.className = 'thumbnail';

    const itemLink = document.createElement('a');
    itemLink.setAttribute('href', this.item.id);
    itemLink.className = 'thumb';

    const itemImage = document.createElement('img');
    itemImage.setAttribute('src', this.item.imageUrl);
    itemImage.setAttribute('alt', this.item.name);

    const itemName = document.createElement('a');
    itemName.textContent = this.item.name;
    itemName.setAttribute('href', this.item.id);

    const itemSnippet = document.createElement('p');
    itemSnippet.textContent = this.item.snippet;

    const button = new Button('Add to cart', this.onClick).render();

    catalogItem.insertAdjacentElement('afterbegin', itemLink);
    itemLink.insertAdjacentElement('afterbegin', itemImage);
    itemLink.insertAdjacentElement('afterend', itemName);
    itemName.insertAdjacentElement('afterend', itemSnippet);
    itemSnippet.insertAdjacentElement('afterend', button);

    return catalogItem;
  };
}

export default CatalogItem;