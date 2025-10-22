const btnDownload = document.querySelector('.btn-dw');
const btnWarning = document.querySelector('.btn-wr');


function randomNum() {
    return Math.floor(Math.random() * 5000);
}



function downloadPhoto() {
    btnDownload.addEventListener('click', (e) => {
        const url = 'https://jsonplaceholder.typicode.com/photos';

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                const num = randomNum();
                const photo = result[num].title;
                console.log(`Index: ${num}, Title: ${photo}`);

                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div class="modal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Photo</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>${photo}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                `;

                document.body.appendChild(modal);

                const modalNode = modal.querySelector('.modal');
                const modalEl = new bootstrap.Modal(modalNode);
                modalEl.show();
            })
            .catch((err) => console.log('Error fetching photo:', err));
    })

}


function warningAlert() {
    let countOpen = 0;
    let alertEl = 0; 

    btnWarning.addEventListener('click', () => {
        countOpen++;

        if (countOpen % 2 === 1) {
            alertEl = document.createElement('div');
            alertEl.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    You don't have permission to access img via URL!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.body.appendChild(alertEl);
        } else if (countOpen % 2 === 0) {
            if (alertEl) {
                alertEl.remove();
            }
        }
    })
}


downloadPhoto();
warningAlert();


