console.log("javascript")

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify/songs/")
    let response = await a.text()
    let div=document.createElement("div")
    div.innerHTML=response;
    let as =div.getElementsByTagName("a")
    let songs=[]
    for(let index=0;index<as.length;index++){
        const element=as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
    
}
async function main() {

    let currentSong;
    let songs = await getSongs()
    console.log(songs)

    let songUL=document.querySelector(".songList").getElementsByTagName("ul")
    for (const song of songs) {
        songUL.innerHTML=songUL.innerHTML+ `<li> <img class="invert" src="img/music.svg" alt="">
        <div class="info">
            <div> ${song.replaceAll("%20"," ")}</div>
            <div>Putin</div>
        </div>                                           
        <div class="palynow">
            <span>Play Now</span>
            <img class="invert" src="img/play.svg" alt="">
        </div> 
         </li>`;
        
    }
    


    var audio = new Audio(songs[0])
    audio.play();


    audio.addEventListener("loadeddata", () => {
        console.log(audio.duration,audio.currentSrc, audio.currentTime )
    });
    
}

main()