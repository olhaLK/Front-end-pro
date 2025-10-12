let peopleURL = 'https://swapi.dev/api/people';
let planetsURL = 'https://swapi.dev/api/planets';
let vehiclesURL = 'https://swapi.dev/api/vehicles';


const peopleList = document.querySelector('.characters-list');
const planetsList = document.querySelector('.planets-list');
const vehiclesList = document.querySelector('.vehicles-list');


const sections = {
    characters: {
        downloadBtn: ".characters-btn-download",
        moreBtn: ".characters-btn-more",
        list: peopleList,
        getUrl: () => peopleURL,
        setUrl: (v) => {
            peopleURL = v;
        },
    },
    planets: {
        downloadBtn: ".planets-btn-download",
        moreBtn: ".planets-btn-more",
        list: planetsList,
        getUrl: () => planetsURL,
        setUrl: (v) => {
            planetsURL = v;
        },
    },
    vehicles: {
        downloadBtn: ".vehicles-btn-download",
        moreBtn: ".vehicles-btn-more",
        list: vehiclesList,
        getUrl: () => vehiclesURL,
        setUrl: (v) => {
            vehiclesURL = v;
        },
    },
}


function load(btn, getUrl, setUrl, list) {
    const loadMoreBtn = document.querySelector(btn);
    const url = getUrl();

    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            show(result.results, list);
            setUrl(result.next);

            result.next
                ? loadMoreBtn.classList.remove('hidden')
                : loadMoreBtn.classList.add('hidden');
        });
}


function show(value, list) {
    value.forEach((item) => {
        const element = document.createElement('li');
        element.textContent = item.name || item.title;
        element.dataset.url = item.url;
        list.appendChild(element);
    });
}


document.addEventListener('click', (event) => {
    for (let key in sections) {
        const sec = sections[key];

        if (event.target.matches(sec.downloadBtn)) {
            if (sec.list.querySelector("li")) {
                break;
            }
            load(sec.moreBtn, sec.getUrl, sec.setUrl, sec.list);
            return;
        }

        if (event.target.matches(sec.moreBtn)) {
            load(sec.moreBtn, sec.getUrl, sec.setUrl, sec.list);
            return;
        }
    }
})


//---------OPEN INFO-------------

function showInfoDetails(bodyHtml) {
    const modalContainer = document.createElement('div');

    modalContainer.innerHTML = `
        <div class="modal fade">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">'Details'}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-2">
                        ${bodyHtml}
                    </div>
                <div/>
            <div/>
        <div/>
    `
    const element = modalContainer.firstChild
    document.body.appendChild(element);

    const modal = new bootstrap.Modal(element);
    modal.show();

    element.addEventListener('hidden.bs.modal', () => {
        modal.dispose();
        element.remove();
    })
}

function infoDetails(url) {
    fetch(url)
        .then(r => r.json())
        .then(data => {
            const title = 'Details';
        })
}



document.addEventListener('click', (item) => {
    const li = item.target.closest('.list li');
    const url = li.dataset.url;

    if(!li && !url) return;

    infoDetails(url);
})