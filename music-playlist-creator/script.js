// JavaScript for Opening and Closing the Modal (new screen)
const modal = document.getElementById("playlistModal");
const playlistModal = document.getElementById("editingModal");
const span = document.querySelectorAll("song"); // array of songs


let count = 8; // starting at the eigth one to add an element, increment

const openModal = (playlist) => {
    console.log(playlist);
   document.getElementById('PlaylistName').innerText = playlist.playlist_name;
   document.getElementById('PlaylistImage').src = playlist.playlist_art;
   document.getElementById('CreatorName').innerText = playlist.playlist_author;
    // for the song element

   document.addEventListener("DOMContentLoaded", loadSongs(playlist["songs"]));
   
   modal.style.display = "block";
}

const openPlaylistModal = (playlist) => {
    playlistModal.style.display = "block";
    console.log("_______");
    
    document.getElementById('edit').addEventListener('click', () => handlePlaylistSubmit(playlist, "edit")); 
    document.getElementById('add').addEventListener('click', () => handlePlaylistSubmit(playlist, "add")); 
    
}


const loadPlaylists = () => {
    console.log("playlists loading")
    const container = document.querySelector(".playlist-cards");
    console.log(container);
    if (playlists === null) { // check if null or undefined
        console.log("No playlists added");
    } else {
        for (const playlist of playlists) {
            const el = createPlaylistElement(playlist);
            container.append(el);
        }
    }

    // for each playlist created, iterate through the playlist cards
    document.querySelectorAll('.playlist-card').forEach(el => {
        console.log(el);
        el.addEventListener('click', (event) => {
            event.stopPropagation();
            if (event.target.closest("button")) { 
                return; // so it ignores the like button (i.e. like button is clickable)
            }
            openModal(playlists[el.id]); // send in a playlist object from reviews.js
        })
    })

    //document.getElementById('editing-btn').addEventListener('click', () => openPlaylistModal); // Event Listener
}

const createPlaylistElement = (playlist) => {
    const playElement = document.createElement('section');
    playElement.id = playlist.playlistId;
    playElement.className = "playlist-card";
    playElement.innerHTML = `
    <img src="${playlist.playlist_art}"/>
    <h3>${playlist.playlist_name}</h3>
    <h4>${playlist.playlist_author}</h4>
    
    <div class="likes">
        <button id="editing-btn" onclick="openPlaylistModal(${playlist.playlistId})"><img src="assets/img/plus_sign.png"/></button>
        <button id = 'heart' liked="false" onclick="handleLikes(this, ${playlist.playlistId})"><img src="assets/img/heart-icon.webp"/></button>
        <h4 class="countLikes">0</h4>
        <button id="delete-btn" onclick="deletePlaylist(${playlist.playlistId})"><img src="assets/img/x-picture.webp"/></button>
    </div>
    `;
    
    return playElement;
}

if (document.getElementById("index")) {
    document.addEventListener("DOMContentLoaded", loadPlaylists());
}



const loadSongs = (songs) => {

    const container = document.querySelector(".songs");
    if (songs === null) {
        console.log("There are no songs present");
    } else {
        container.innerHTML = "";
        for (const song of songs) {
            if (song === null) {
                continue;
            }
            const el = createSongElement(song);
            container.append(el);
        }
    }

    document.getElementById('shuffle-btn').addEventListener('click', () => handleShuffling(songs)); // Event Listener
}


const createSongElement = (song) => {
    
    const songElement = document.createElement('section');
    songElement.className = 'song';
    songElement.innerHTML = `
    <img id="SongImage" src="${song.song_art}" alt="Song Image">
    <div class="SongDetails">
        <h4 class="songTitle">${song.song_title}</h4>
        <h4 class="artistName">${song.song_artist}</h4>
        
    </div>
    <h4 class="times">${song.duration}</h4>
    `;
    return songElement;
}

// for featured element (for styling purposes)
const createFeaturedSongElement = (song) => {
    
    const songElement = document.createElement('section');
    songElement.className = 'featured_song';
    songElement.innerHTML = `
    <img id="FeaturedSongImage" src="${song.song_art}" alt="Featured Song Image">
    <div class="FeaturedSongDetails">
        <h4 class="featuredSongTitle">${song.song_title}</h4>
        <h4 class="featuredArtistName">${song.song_artist}</h4>
        
    </div>
    <h4 class="featuredTimes">${song.duration}</h4>
    `;
    return songElement;
}

// for likes
const handleLikes = (button, playlist) => {
    const likes = document.querySelectorAll(".countLikes")[playlist];
    console.log(likes);
    let likesCount = parseInt(likes.textContent, 10);
    const isLiked = button.getAttribute('liked') === 'true';; // to check whether to decrease or increase the count for likes
    if (isLiked) { // already has been clicked
        likesCount--;
        likes.textContent = `${likesCount}`;
        button.setAttribute('liked', 'false');
    } else {
        likesCount++;
        likes.textContent = `${likesCount}`; 
        button.setAttribute('liked', 'true');
    }
}

// for shuffling
const handleShuffling = (songs) => {

    const songArray = songs;

    for (let i = 0; i < songArray.length; i++) {
        console.log(songs[i]);
    }
    // shuffling methodology
    let index = songArray.length;

    while (index != 0) {
        let randomIndex = Math.floor(Math.random() * index);
        index--;

        [songArray[index], songArray[randomIndex]] = [songArray[randomIndex], songArray[index]];
    }

    for (let i = 0; i < songArray.length; i++) {
        console.log(songArray[i]);
    }
    
    loadSongs(songArray);
}

// for featured page control
const randomFeature = () => {
    let ranNum = parseInt(Math.random() * (playlists.length)); // random number from 0 to 8 (exclusive)
    const playlist = playlists[ranNum];

    console.log(playlist);

    document.getElementById('Playlist Name').innerText = playlist.playlist_name;
    document.getElementById('Playlist Image').src = playlist.playlist_art;
    document.getElementById('Creator Name').innerText = playlist.playlist_author;

    const songs = playlist["songs"];

    if (document.querySelector('.featured_songs') && document.querySelector('.feature-playlist')) {
        const container = document.querySelector(".featured_songs") ;
        if (songs === null) {
            console.log("There are no songs present");
        } else {
            container.innerHTML = "";
            for (const song of songs) {
                const el = createFeaturedSongElement(song);
                container.append(el);
            }
        }
    }
}

// for editingModal opening using button
const handlePlaylistSubmit = (playlist, type) => { // index in case we are editing over a known 
    console.log("______");
    event.preventDefault();
    const newPlaylist = {
        "playlistId": count, // first playlist object
		"playlist_name": document.getElementById('playlist-title').value,
		"playlist_author": document.getElementById('playlist-author').value,
		"playlist_art": document.getElementById('playlist-art').value, // placeholder (user does not provide)
		"songs": [ // object inside of an object
            {
                "song_title": document.getElementById('song1-title').value,
                "song_artist": document.getElementById('song1-author').value,
                "duration": document.getElementById('song1-duration').value,
                "song_art": "assets/img/song.png"
            },
            {
                "song_title": document.getElementById('song2-title').value,
                "song_artist": document.getElementById('song2-author').value,
                "duration": document.getElementById('song2-duration').value,
                "song_art": "assets/img/song.png"
            },
            {
                "song_title": document.getElementById('song3-title').value,
                "song_artist": document.getElementById('song3-author').value,
                "duration": document.getElementById('song3-duration').value,
                "song_art": "assets/img/song.png"
            }
        ]
    };

    if (type === 'edit') { // add in when delete code comes
        const playElement = document.querySelectorAll(".playlist-card")[playlist]; // specific playlist
        console.log(playElement);
        // for the playlist itself
        let img = playElement.querySelector('img');
        img.src = document.getElementById('playlist-art').value; // new image
        let playlistTitle = playElement.querySelector('h3');
        playlistTitle.textContent = document.getElementById('playlist-title').value;
        let playlistAuthor = playElement.querySelector("h4");
        playlistAuthor.textContent = document.getElementById('playlist-author').value;

        // for the modal
        playElement.addEventListener('click', (event) => {
            event.stopPropagation();
            if (event.target.closest("button")) { 
                return; // so it ignores the like button (i.e. like button is clickable)
            }
            document.getElementById('PlaylistName').innerText = document.getElementById('playlist-title').value;
            document.getElementById('PlaylistImage').src = document.getElementById('playlist-art').value;
            document.getElementById('CreatorName').innerText = document.getElementById('playlist-author').value;

            const container = playElement.querySelector(".songs");
            
            //modal.style.display = "block";

        })
    } else if (type === 'add') {
        const container = document.querySelector(".playlist-cards");
        const el = createPlaylistElement(newPlaylist);
        console.log(el);
        container.append(el);

        count++;
    }

    //event.target.reset();

}

// to delete a playlist
const deletePlaylist = (playlist) => {
    const playElement = document.querySelectorAll(".playlist-card")[playlist];
    playElement.remove(); // delete playlist
}

// both functions for modal control

span.onclick = function() {
   modal.style.display = "none";
   playlistModal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   } else if (event.target == playlistModal) {
      playlistModal.style.display = "none";
   }
}

// span.onclick = function() {
//    playlistModal.style.display = "none";
// }
// window.onclick = function(event) {
//    if (event.target == playlistModal) {
//       playlistModal.style.display = "none";
//    }
// }
