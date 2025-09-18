import { addRows } from './form.js';


//-------------------------------------



const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      showProductsByCategory(category);

    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}



const showProductsByCategory = category => {
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }

  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      Array.from(productsList.querySelectorAll('li.active')).forEach(li => li.classList.remove('active'));
      event.target.classList.add('active');

      console.log(event.target);

      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product');
      const infoContainer = document.querySelector('.info');
      if (!infoContainer) {
        return;
      }
      
      infoContainer.innerHTML = ''
      
      const infoList = document.createElement('ul');

      const getProductById = id => products.find(product => product.id == id);

      const product = getProductById(productId);
      if (!product) {
        return;
      }

      window.selectedProduct = {
        ...product,
        categoryId: category.id,
        categoryName: category.name
      };

      const description = document.createElement('li');
      description.textContent = product.description;

      infoList.appendChild(description);

      infoContainer.appendChild(infoList);
    }
  });


  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);
}



showCategories();



//-----MY ORDERS--------

const orderDetails = document.querySelector('.order-details');
const btnMyOrders = document.querySelector('.my-orders');
const btnBack = document.querySelector('.btn-back');

const orderFormEl = document.querySelector('.orderForm');
if (orderFormEl) orderFormEl.style.display = 'none';

const createShopPage = () => {
  document.querySelector('.wrapper').innerHTML = `
  <div class="categories"></div>
  <div class="products"></div>
  <div class="info"></div>
  <button type="button" class="btn-buy">Buy</button>
  `;

  showCategories();

  if (orderDetails) orderDetails.innerHTML = '';
}


const ordersList = document.createElement('ul');
ordersList.classList.add('orders-list');

btnBack.onclick = () => createShopPage();


btnMyOrders.addEventListener('click', () => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
  orderDetails.innerHTML = '';

  wrapper.appendChild(btnBack);
  wrapper.appendChild(ordersList);

  btnBack.style.display = 'inline-block';
  ordersList.style.display = 'flex';

  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    wrapper.innerHTML = `<p class="empty-text">You don't have any orders yet...</p>`;
    wrapper.prepend(btnBack);         
    return;
  } 

  ordersList.innerHTML = '';

  for (const order of orders) {
    const orderItem = document.createElement('li');
    orderItem.dataset.id = order.date;

    const btnDelete = document.createElement('button');
    btnDelete.type = 'button';
    btnDelete.textContent = 'Delete';
    btnDelete.classList.add('btn-delete');

    const tableOrders = document.createElement('table');
    addRows("Date", new Date(order.date).toLocaleString(), tableOrders);
    addRows("Product", order.name, tableOrders);
    addRows("Category", order.categoryName, tableOrders);
    addRows("Price", order.price, tableOrders);

    orderItem.appendChild(tableOrders);
    ordersList.appendChild(orderItem);
    orderItem.appendChild(btnDelete);

    ordersList.onclick = (btn) => {
      const targetBtn = btn.target.closest('.btn-delete');
      if (!targetBtn) {
        return;
      }

      const targetItem = targetBtn.closest('li');
      const id = targetItem.dataset.id;
      const targetId = orders.findIndex(i => i.date === id);
      if (targetId !== -1) {
        orders.splice(targetId, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
      }

      targetItem.remove();

      if (orders.length === 0) {
        wrapper.innerHTML = `<p class="empty-text">You don't have any orders yet...</p>`;
        wrapper.prepend(btnBack);              
        return;
      } 
    }
  }
})

