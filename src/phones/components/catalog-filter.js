class CatalogFilter {

  render() {
    const FILTER_ITEMS = [
      { name: 'All', value: 'all' },
      { name: 'Alphabetical', value: 'name' },
      { name: 'Newest', value: 'age' }
    ];

    const filter = document.createElement('div');
    const title = document.createElement('span');
    title.textContent = 'Sort by: ';

    const select = document.createElement('select');
    select.className = 'filter';

    FILTER_ITEMS.forEach((item => {
      const option = document.createElement('option');
      option.setAttribute('value', item.value);
      option.textContent = item.name;

      select.insertAdjacentElement('beforeEnd', option);
    }));

    filter.insertAdjacentElement('afterbegin', select);
    filter.insertAdjacentElement('afterbegin', title);

    return filter;
  }
}

export default CatalogFilter;