import PhoneService from '../../phones/services/phone-service.js';
import Component from '../../common/component.js';
import Catalog from '../../phones/components/catalog.js';
import CatalogFilter from '../../phones/components/catalog-filter.js';
import Sidebar from '../../app/components/sidebar.js';

class CatalogPage extends Component {
  render() {
    const { formatProps, createElement } = this;
    const page = createElement(formatProps('div', { className: 'page' }));

    PhoneService.getPhones().then((phones) => {
      page.appendChild(new Catalog(phones).render());
    });

    page.appendChild(new Sidebar(new CatalogFilter().render()).render());

    return page;
  }
}

export default CatalogPage;
