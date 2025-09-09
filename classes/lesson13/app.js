const genders = {
    M: "Male",
    F: "Female",
};

const cities = {
  ODS: "Odessa",
  KV: "Kyiv",
  LV: "Lviv",
  KH: "Kharkiv",
  VN: "Vinnytsia"
};

const langs = {
  en: "English",
  uk: "Ukrainian",
  ru: "Russian",
  fr: "French",
  de: "German"
};


document.querySelector('button').addEventListener('click', () => {
    const form = document.forms.signUp;
    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    const bday = form.bday.value;
    const gender = form.gender.value;
    const city = form.city.value;
    const adress = form.adress.value.trim();

    const languages = [];

    for (let i = 0; i < form.lang.length; i++) {
        if (form.lang[i].checked) {
            languages.push(langs[form.lang[i].value]); //to understand more
        }
    }

    const tableContainer = document.querySelector('div');

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
    addRows("Surname", surname);
    addRows("B-day", bday);
    addRows("Gender", gender);
    addRows("City", cities[city]);
    addRows("Adress", adress);
    addRows("Languages", languages)

    form.style.display = "none";
    tableContainer.appendChild(table);
});