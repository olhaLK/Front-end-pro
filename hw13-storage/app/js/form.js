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

const btnBuy = document.querySelector('.btn-buy');
const form = document.forms.orderForm;
const tableContainer = document.querySelector('.order-details');
const btnSave = document.querySelector('.btn-save');


if (form) {
  form.style.display = 'none';
}

if (btnBuy) {
  btnBuy.addEventListener('click', () =>{
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
  })
}

if (btnBuy && form) {
  btnBuy.addEventListener('click', () => {
    form.style.display = 'flex';
  })
  tableContainer.style.display = 'none'; 
}

if (tableContainer) {
  tableContainer.style.display = 'none';
}

if (btnSave && tableContainer) {
  btnSave.addEventListener('click', () => {
    tableContainer.style.display = 'flex';
  })
}


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


  if (!window.selectedProduct) {
    alert('Please select a product before saving the order');
    return;
  }


  const tableContainer = document.querySelector('.order-details');
  tableContainer.innerHTML = '';
  
  const tableDetails = document.createElement('table');

  const product = window.selectedProduct;
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