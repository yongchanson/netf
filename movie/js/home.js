const main = document.querySelector('.main');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data.results)
        main.innerHTML += `
        <div class="list">
            <button class="prebtn"><img src="img/pre.png" style="height : 50px;"></button>
            <h1 class="category">인기영화</h1>
            <div class="content" id="popluar"></div>
            <button class="nxtbtn"><img src="img/nxt.png" style="height : 50px;"></button>
        </div>
        `;  
        addpopular(data.results);
    })
}

function addpopular(data) {
    data.forEach(movie => {
        const {title, poster_path, vote_average, release_date, id } = movie;
        const popluar = document.querySelector("#popluar");
        
    popluar.innerHTML += ` 
    <div class="movie">
        <img src="${poster_path? IMG_URL+poster_path: "img/noimage.png" }" alt="${title}" onclick="location.href = '/${movie.id}'">
        <h3 class="title">${title}</h3>
    </div>
    `;

    })
}
