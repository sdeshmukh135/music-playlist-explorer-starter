// JavaScript for Opening and Closing the Modal (new screen)
const modal = document.getElementById("playlistModal");
const playlistModal = document.getElementById("editingModal");
const span = document.querySelectorAll("song"); // array of songs


let count = 8; // starting at the eigth one to add an element, increment
let addedSongs = []; // update this with adding songs

// for the header
if (document.getElementById("index")) {
    document.getElementById('search-bar').addEventListener('keydown', (event) => handleSearch(event)); 
}

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
    
    document.getElementById('addSong').addEventListener('click', () => addSongs()) ;
    document.getElementById('edit').addEventListener('click', () => handlePlaylistSubmit(playlist, "edit")); 
    document.getElementById('add').addEventListener('click', () => handlePlaylistSubmit(playlist, "add")); 
    
}

const handleSearch = (event) => {

    if (event.key === 'Enter') {
        const searchtext = document.getElementById('search-bar').value.toLowerCase();
        const currentPlaylists = document.querySelectorAll(".playlist-card");
   
        for (let i = 0; i < playlists.length; i++) { // doesn't account for mixing with adding or deleting
            
            const playlist = currentPlaylists[i];
            
            const title = playlist.querySelector("h3").textContent;
            const author = playlist.querySelector("h4").textContent;


            if (!(title.toLowerCase().includes(searchtext) || author.toLowerCase().includes(searchtext))) {
                // doesn't fit search criteria
                playlist.style.display = "none";
            }
        }
    }
}


const loadPlaylists = () => {
    console.log("playlists loading")
    const container = document.querySelector(".playlist-cards");
    console.log(container);
    if (playlists === null) { // check if null or undefined
        console.log("No playlists added");
    } else {
        container.innerHTML = "";
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
        <h4 class="countLikes">${playlist.likes}</h4>
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

const addSongs = () => {
    console.log("Add Song Clicked");
    const song = {
                "song_title": document.getElementById('song-title').value,
                "song_artist": document.getElementById('song-author').value,
                "duration": document.getElementById('song-duration').value,
                "song_art": "assets/img/song.png"
            };

    addedSongs.push(song);
    console.log(addedSongs);

    document.querySelector(`input[name="song-title"]`).value = ``;
    document.querySelector(`input[name="song-author"]`).value = ``;
    document.querySelector(`input[name="song-duration"]`).value = ``;
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
		"songs": addedSongs // object inside of an object
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
            
            // songs
            const index = 0;
            for (const song of addedSongs) {
                const songElement = document.querySelectorAll(".song")[index];
                songElement.querySelector('img').src = song.song_art;
                songElement.querySelector(".songTitle").textContent = song.song_title;
                songElement.querySelector(".artistName").textContent = song.song_artist;
                index++;
            }

        })
    } else if (type === 'add') {
        const container = document.querySelector(".playlist-cards");
        const el = createPlaylistElement(newPlaylist);
        console.log(el);
        container.append(el);
        el.addEventListener('click', (event) => {
            event.stopPropagation();
            if (event.target.closest("button")) { 
                return; // so it ignores the like button (i.e. like button is clickable)
            }
            document.getElementById('PlaylistName').innerText = document.getElementById('playlist-title').value;
            document.getElementById('PlaylistImage').src = document.getElementById('playlist-art').value
            document.getElementById('CreatorName').innerText = document.getElementById('playlist-author').value;

            document.addEventListener("DOMContentLoaded", loadSongs(addedSongs));
   
            modal.style.display = "block";
        })

        count++;
    }

    // clear input
    document.querySelector(`input[name="playlist-title"]`).value = ``;
    document.querySelector(`input[name="playlist-author"]`).value = ``;
    document.querySelector(`input[name="playlist-art"]`).value = ``;


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
   } else if (!event.target.matches('.dropdownButton')) {
        const dropdown = document.getElementsByClassName("options");
        // three options (can convert for dynamic allocation) 
        for (let i = 0; i < 3; i++) {
            const open = dropdown[i];
            if (open.classList.contains("show")) {
                open.classList.remove("show");
            }
        }
        

   }
}

// sorting methods
const dropdown = () => {
    console.log("_____");
    document.getElementById("drop-options").classList.toggle("show"); // to show the options
}

const sort = (option) => {
    if (option === "Name") {
        // sort by names
        const currentPlaylists = document.querySelectorAll(".playlist-card");
   
        playlists.sort(function(a,b) {return a.playlist_name.localeCompare(b.playlist_name);})

        currentPlaylists.innerHTML = "";
        loadPlaylists(playlists);
        
    } else if (option === "Likes") {

        const currentPlaylists = document.querySelectorAll(".playlist-card");

        playlists.sort(function(a,b) {return (a.likes) - (b.likes);})

        currentPlaylists.innerHTML = "";
        loadPlaylists(playlists);

       loadPlaylists(playlists);

    } else {
        // for dates
        const currentPlaylists = document.querySelectorAll(".playlist-card");

        playlists.sort(function(a,b) {return (a.playlistId) - (b.playlistId);})

        playlists.reverse();

        currentPlaylists.innerHTML = "";
        loadPlaylists(playlists);
    }


}
