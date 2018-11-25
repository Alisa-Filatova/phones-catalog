import PhoneService from './phones/services/phone-service.js';
import Catalog from './phones/components/catalog.js';
import CatalogFilter from './phones/components/catalog-filter.js';

const main = document.querySelector('.app');

const page = document.createElement('div');
page.className = 'main-page';

const sidebar = document.createElement('div');
sidebar.className = 'sidebar';

main.insertAdjacentElement('afterbegin', page);
main.insertAdjacentElement('afterbegin', sidebar);

const filter = new CatalogFilter().render();
sidebar.insertAdjacentElement('afterbegin', filter);

PhoneService.getPhones().then((phones) => {
  const catalog = new Catalog(phones).render();
  page.insertAdjacentElement('afterbegin', catalog);
});
