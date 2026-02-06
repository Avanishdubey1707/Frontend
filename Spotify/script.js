console.log("Spotify Clone Booting...");

let currentSong = new Audio();
let songs = [];
let currFolder = "";


const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

async function getSongs(folder) {
    currFolder = folder;
    songs = [];

    console.log("Loading songs from:", folder);

    try {
        let res = await fetch(`/Spotify/${folder}/`);
        let text = await res.text();

        let div = document.createElement("div");
        div.innerHTML = text;

        let links = div.getElementsByTagName("a");

        for (let link of links) {
            if (link.href.endsWith(".mp3")) {
                
                let fullPath = decodeURIComponent(link.href);
                
                
                let filename = fullPath.split("/").pop().split("\\").pop();

                songs.push(filename);
            }
        }
    } catch (e) {
        console.error("Error fetching songs:", e);
    }

    console.log("Songs found:", songs);

    
    let songUL = document.querySelector(".songList ul");
    songUL.innerHTML = "";

    songs.forEach((song) => {
        songUL.innerHTML += `
        <li>
            <img class="invert" width="34" src="img/music.svg" alt="">
            <div class="info">
                <div>${song}</div>
                <div>Spotify Clone</div>
            </div>
            <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="img/play.svg" alt="">
            </div>
        </li>`;
    });

 
    Array.from(document.querySelectorAll(".songList li")).forEach((li, i) => {
        li.addEventListener("click", () => {
            playMusic(songs[i]);
        });
    });

    return songs;
}



const playMusic = (track, pause = false) => {

  
    currentSong.src = `/Spotify/${currFolder}/${encodeURIComponent(track)}`;

    console.log("Playing:", currentSong.src);

    currentSong.load();

    if (!pause) {
        currentSong.play()
            .then(() => console.log("Audio playing"))
            .catch(err => console.error("Play error:", err));

        play.src = "img/pause.svg";
    }

    document.querySelector(".songinfo").innerHTML = track;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};



async function displayAlbums() {
    console.log("Building album cards...");

    const cardContainer = document.querySelector(".cardContainer");
    cardContainer.innerHTML = "";

    const albums = [
        { folder: "ncs", title: "NCS Playlist", description: "Non copyright music" },
        { folder: "cs", title: "Coding Beats", description: "Programming music" },
        { folder: "Arijit Singh", title: "Arijit Songs", description: "Arijit singh's songs" }
    ];

    albums.forEach(album => {
        cardContainer.innerHTML += `
        <div class="card" data-folder="${album.folder}">
            <div class="play">▶</div>
            <img src="songs/${album.folder}/cover.jpg" alt="">
            <h2>${album.title}</h2>
            <p>${album.description}</p>
        </div>`;
    });

  
    Array.from(document.getElementsByClassName("card")).forEach(card => {
        card.addEventListener("click", async () => {
            let folder = "songs/" + card.dataset.folder;
            console.log("Album clicked:", folder);

            songs = await getSongs(folder);

            if (songs.length > 0) {
                playMusic(songs[0]);
            }
        });
    });
}



async function main() {

   
    await getSongs("songs/ncs");

    if (songs.length > 0) {
        playMusic(songs[0], true);
    }

    await displayAlbums();

  
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    });

 
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

        document.querySelector(".circle").style.left =
            (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent =
            (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });

   
    previous.addEventListener("click", () => {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if (index - 1 >= 0) {
            playMusic(songs[index - 1]);
        }
    });

   
    next.addEventListener("click", () => {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if (index + 1 < songs.length) {
            playMusic(songs[index + 1]);
        }
    });

   
    document.querySelector(".range input").addEventListener("change", e => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });

   
    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentSong.volume = 0;
            document.querySelector(".range input").value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentSong.volume = 0.1;
            document.querySelector(".range input").value = 10;
        }
    });
}

main();
