// Fetch data from API
fetch('https://randomuser.me/api/?results=6')
    .then(response => response.json())
    .then(data => {
        const items = document.querySelectorAll('.item');

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const user = data.results[i];

            const img = item.querySelector('img');
            img.src = user.picture.large;

            const name = item.querySelector('h2');
            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

            const email = item.querySelector('p');
            email.textContent = user.email;

            item.setAttribute('data-user', JSON.stringify(user));
        }
    })
    .catch(error => {
        console.log(error);
    });

// Modal functions
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

function openModal(index) {
    const item = document.querySelectorAll('.item')[index];
    const user = JSON.parse(item.getAttribute('data-user'));

    const img = modalContent.querySelector('img');
    img.src = user.picture.large;

    const name = modalContent.querySelector('h2');
    name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const email = modalContent.querySelectorAll('p')[0];
    email.textContent = user.email;

    const phone = modalContent.querySelectorAll('p')[1];
    phone.textContent = user.phone;

    const address = modalContent.querySelectorAll('p')[2];
    address.textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

    modal.style.display = 'block';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
