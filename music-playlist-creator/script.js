// JavaScript for Opening and Closing the Modal (new screen)
const modal = document.getElementById("playlistModal");
const span = document.querySelectorAll("song"); // array of songs

//console.log(span);


const openModal = (playlist) => {
    console.log("_____");
   document.getElementById('PlaylistName').innerText = playlist.playlist_name;
   document.getElementById('PlaylistImage').src = playlist.playlist_art;
   document.getElementById('CreatorName').innerText = playlist.playlist_author;
    console.log("______");
    // for the song element
   document.addEventListener("DOMContentLoaded", loadSongs());
   modal.style.display = "block";
}

const loadPlaylists = () => {
    console.log("playlists loading")
    const container = document.querySelector(".playlist-cards");
    if (playlists === null) { // check if null or undefined
        console.log("No playlists added");
    } else {
        for (const playlist of playlists) {
            const el = createPlaylistElement(playlist);
            container.append(el);
        }
    }

}

const createPlaylistElement = (playlist) => {
    console.log(playlist);
    const playElement = document.createElement('section');
    playElement.className = "playlist-card";
    playElement.innerHTML = `
    <img src=${playlist.playlist_art}/>
    <h3>${playlist.playlist_name}</h3>
    <h4>${playlist.playlist_author}</h4>
    <div class="likes">
        <img src="assets/img/heart-icon.webp"/>
        <h4>0</h4>
    </div>
    <div>
        <button onclick="openModal(${playlist})"></button>
    </div>`;
    return playElement;
}

document.addEventListener("DOMContentLoaded", loadPlaylists());

const loadSongs = (playlist) => {
    console.log("_____");
    const container = document.querySelector(".songs");
    if (playlist.songs === null) {
        console.log("There are no songs present");
    } else {
        for (const song of playlist.songs) {
            const el = createSongElement(song);
            container.append(el);
        }
    }
}

const createSongElement = (song) => {
    console.log(song);
    const songElement = document.createElement('section');
    songElement.className = 'song';
    songElement.innerHTML = `
    <img id="SongImage" src=${song.song_art} alt="Song Image">
    <h4 class="songTitle">${song.song_title}</h4>
    <h4 class="artistName">${song.song_artist}</h4>
    <h4 class="times">${song.duration}</h4>
    `;
    return songElement;
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
