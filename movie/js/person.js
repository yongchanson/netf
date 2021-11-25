const main = document.querySelector('.main');

fetch(`${BASE_URL}/person/${person_id}?` + API_KEY)
.then(res => res.json())
.then(data => {
    console.log(data);
    main.innerHTML = "dd";
})