import CatalogPage from './app/routes/catalog-page.js';

const root = document.querySelector('.app');

root.appendChild(new CatalogPage().render());
