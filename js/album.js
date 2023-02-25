let container = document.querySelector(`.album`);
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
console.log(i);
// готово! i это нужное нам число
let album = albums[i];
if(!album){
    container.innerHTML=`Error 404`
}
else{
    container.innerHTML=`
<div class="card mb-3">
<div class="row">
        <div class="col-4">
            <img src="${album.img}" alt="" class="img-fluid rounded-start">
        </div>
        <div class="col-8">
            <div class="card-body">
                 <h5 class="card-title">${album.title}</h5>
                <p class="card-text">${album.decription}</p>
                 <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
            </div>
         </div>
     </div>
</div>
`
let playlist = document.querySelector(`.playlist`);

let tracks =album.tracks;

for(let j=0; j<tracks.length;j++){
    let track = tracks[j];
    playlist.innerHTML+=`
    <li class=" track list-group-item d-flex align-items-center">
                        <img class="img-pause me-3" src="assets/pause.png" alt="" class="me-3" height="30px">
                        <img class="img-play me-3 d-none" src="assets/play.gif" alt="" class="me-3" height="30px">
                        <div class="me-3">
                            <div>${track.title}</div>
                            <div class="text-secondary">${track.author}</div>
                        </div>
                        <audio class="audio" src="${track.src}" controls></audio>
                    </li>
    `
}


function setupAudio() {
    // Найди коллекцию с треками
    let trackNodes = document.querySelectorAll(`.track`); 
    for (let i = 0; i < trackNodes.length; i++) { 
        // Один элемент
        let node = trackNodes[i]; 
        let timeNode=node.querySelector(`.time`);
        let imgPause = node.querySelector(`.img-pause`);
        let imgPlay = node.querySelector(`.img-play`) ;
        // Тег аудио внутри этого элемента
        let audio = node.querySelector(`.audio`); 
        let isPlaying = false;
        node.addEventListener(`click`, function () {
        // Если трек сейчас играет...
        if (isPlaying) {
            isPlaying = false;
            // Поставить на паузу
            audio.pause();
            imgPause.classList.remove(`d-none`);
            imgPlay.classList.add(`d-none`);

        // Если трек сейчас не играет...
        } else {
            isPlaying = true;
            // Включить проигрывание
            audio.play();
            imgPause.classList.add(`d-none`);
            imgPlay.classList.remove(`d-none`);
        }
    });
    }
}
setupAudio();
}

