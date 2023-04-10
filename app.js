// Fetch Data
function getData() {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

function displayUser(user) {
    const userDisplay = document.querySelector('.flex-container')
    if (user.gender === 'male') {
        document.body.style.backgroundColor = 'blue'
    } else {
        document.body.style.backgroundColor = 'pink'
    }
    userDisplay.innerHTML = `
            <div class="img">
                <img src=${user.picture.large}>
            </div>
            <div class="description">
                <h5>Name: <span>${user.name.first} ${user.name.last}</span></h5>
                <h5>Email: <span>${user.email}</span></h5>
                <h5>Phone: <span>${user.phone}</span></h5>
                <h5>Location: <span>${user.location.country}</span></h5>
                <h5>Age: <span>${user.dob.age}</span></h5>
            </div>
    `
}
document.querySelector('.btn').addEventListener('click', getData)