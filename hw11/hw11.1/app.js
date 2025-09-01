const container = document.getElementsByTagName('div')[0];

const table = document.createElement('table');

function makeTable() {
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

makeTable();
container.appendChild(table);
