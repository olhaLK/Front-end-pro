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


document.querySelector('.btn-save').addEventListener('click', () => {
  const form = document.forms.orderForm;
  const name = form.name.value.trim();
  const city = form.city.value;
  const post = form.post.value;
  const method = form.method.value;
  const count = form.number.value;
  const comm = form.comm.value;

  const tableContainer = document.querySelector('.order-details');

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

  addRows("Name", name);
  addRows("City", cities[city]);
  addRows("Post office №", post);
  addRows("Payment method", method);
  addRows("Count of products", count);
  addRows("Comment to your order", comm);

  form.style.display = "none";
  tableContainer.appendChild(table);
})