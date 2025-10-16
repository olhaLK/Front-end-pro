function myBDay() {
    const container = document.createElement('div');
    container.innerHTML = `
    <h2>MY B-DAY</h2>
    <div class="dateContainer"></div>
    `;
    document.body.appendChild(container);

    const dateContainer = document.querySelector('.dateContainer');

    const bDayDate = '19.10.2005';
    const formattedDate = moment(bDayDate, 'DD.MM.YYYY').format('MMM Do YY');
    dateContainer.textContent = formattedDate;
}

myBDay(); // why it waits for the next function?

function userBDay() {
    const regEx = /^([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9]{3})$/;               
    const userDate = prompt("Enter your b-day date in format  DD/MM/YYYY.");

    const container = document.createElement('div');
    container.innerHTML = `
    <h2>YOUR B-DAY</h2>
    <div class="userDateContainer"></div>
    `;
    document.body.appendChild(container);

    const dateContainer = document.querySelector('.userDateContainer');

    if (!regEx.test(userDate)) {
        alertEl = document.createElement('div');
            alertEl.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> Invalid date format! Please use DD/MM/YYYY.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            `;
            document.body.appendChild(alertEl);

            //TODO add close eventListener
    } else {
        const formattedDate = moment(userDate, 'DD/MM/YYYY').format('MMMM Do YYYY');
        dateContainer.textContent = formattedDate;
    }


}



userBDay();