function myBDay() {
    const container = document.createElement('div');
    container.innerHTML = `
     <div class="d-flex justify-content-center align-items-center my-2">
        <div class="rounded p-4 text-center bg-light shadow">
        <h2 class="text-primary mb-3">MY B-DAY</h2>
        <div class="dateContainer fw-bold fs-4 text-dark"></div>
        </div>
    </div>
    `;
    document.body.appendChild(container);

    const dateContainer = document.querySelector('.dateContainer');

    const bDayDate = '19.10.2005';
    const formattedDate = moment(bDayDate, 'DD.MM.YYYY').format('MMM Do YY');
    dateContainer.textContent = formattedDate;
}



function userBDay() {
    const regEx = /^([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9]{3})$/;               
    const userDate = prompt("Enter your b-day date in format  DD/MM/YYYY.");

    const container = document.createElement('div');
    container.innerHTML = `
     <div class="d-flex justify-content-center align-items-center my-2">
        <div class="rounded p-4 text-center bg-light shadow">
        <h2 class="text-primary mb-3">YOUR B-DAY</h2>
        <div class="userDateContainer fw-bold fs-4 text-dark"></div>
        </div>
    </div>
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

        const closeBtn = alertEl.querySelector('.close');
        closeBtn?.addEventListener('click', () => {
            alertEl.remove();
            container.innerHTML = '';
            userBDay();
        })
    } else {
        const formattedDate = moment(userDate, 'DD/MM/YYYY').format('MMMM Do YYYY');
        dateContainer.textContent = formattedDate;
    }
}



myBDay(); 

setTimeout(() => {
    userBDay();
}, 1000)
