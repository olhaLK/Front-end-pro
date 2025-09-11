const cities = {
  ODS: "Odessa",
  KV: "Kyiv",
  LV: "Lviv",
  KH: "Kharkiv",
  VN: "Vinnytsia"
};

const maethods = {
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

if (btnBuy && form) {
  btnBuy.addEventListener('click', () => {
    form.style.display = 'flex';
  })
}

if (tableContainer) {
  tableContainer.style.display = 'none';
}


if (btnSave && tableContainer) {
  btnSave.addEventListener('click', () => {
    tableContainer.style.display = 'flex';
  })
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

  const table = document.createElement('table');


  function addRows(label, value) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = label;
    td2.textContent = value;

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }


  const product = window.selectedProduct;
  addRows("Product", product.name);
  addRows("Category", product.categoryName);
  addRows("Price", product.price);

  addRows("Name", name);
  addRows("City", cities[city]);
  addRows("Post office №", post);
  addRows("Payment method", method);
  addRows("Count of products", count);
  addRows("Comment to your order", comm);

  form.style.display = "none";
  tableContainer.appendChild(table);
})