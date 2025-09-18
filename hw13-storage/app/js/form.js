const cities = {
  ODS: "Odessa",
  KV: "Kyiv",
  LV: "Lviv",
  KH: "Kharkiv",
  VN: "Vinnytsia"
};

const methods = {
  POD: "Payment on delivery",
  CP: "Card payment",
};



const tableContainer = document.querySelector('.order-details');


document.querySelector('.btn-buy').addEventListener('click', () => {
  const product = window.selectedProduct;
  if (!product) {
    alert('Please select a product first');
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({
    date: new Date().toISOString(),
    name: product.name,
    categoryName: product.categoryName,
    price: product.price
  });
  localStorage.setItem('orders', JSON.stringify(orders));

  const form = document.forms.orderForm;       
  if (form) form.style.display = 'flex';

  if (tableContainer) tableContainer.style.display = 'none';
});



export function addRows(label, value, table) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  td1.textContent = label;
  td2.textContent = value;

  tr.appendChild(td1);
  tr.appendChild(td2);

  table.appendChild(tr);
}



document.querySelector('.btn-save').addEventListener('click', () => {
  const form = document.forms.orderForm;
  const name = form.name.value.trim();
  const city = form.city.value;
  const post = form.post.value;
  const method = form.method.value;
  const count = form.count.value;
  const comm = form.comm.value.trim();


  const checkName = /^[A-Za-z]{2,}\s+[A-Za-z]{2,}$/; 
  const numRegEx  = /^([1-9]\d{0,2})$/;   


  if (!window.selectedProduct) {
    alert('Please select a product before saving the order');
    return;
  }

  if (!name.match(checkName)) {
    alert('Enter your First name and Last Name');
    return; 
  }

  if (!post.match(numRegEx) || !count.match(numRegEx)) {
    alert('Enter number from 1 to 999');
    return; 
  }

  const product = window.selectedProduct;

  tableContainer.innerHTML = '';
  tableContainer.style.display = 'flex';
  
  const tableDetails = document.createElement('table');

  addRows("Product", product.name, tableDetails);
  addRows("Category", product.categoryName, tableDetails);
  addRows("Price", product.price, tableDetails);

  addRows("Name", name, tableDetails);
  addRows("City", cities[city], tableDetails);
  addRows("Post office №", post, tableDetails);
  addRows("Payment method", methods[method], tableDetails);
  addRows("Count of products", count, tableDetails);
  addRows("Comment to your order", comm, tableDetails);

  form.style.display = "none";
  tableContainer.appendChild(tableDetails);
})