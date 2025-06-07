

## Unit Assignment: Music Playlist Explorer

Submitted by: **Sara Deshmukh**

Estimated time spent: **18** hours spent in total

Deployed Application (**required**): https://music-playlist-explore.onrender.com/

### Application Features

#### CORE FEATURES

- [x] **Display Playlists**
  - [x] Dynamically render playlists on the homepage using JavaScript.
    - [x] Playlists should be shown in grid view.
    - [x] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [x] **Playlist Components**
  - [x] Each tile should display the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] Like count

- [x] **Playlist Details**
  - [x] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [x] The modal should show the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] The modal itself should:
    - [x] Not occupy the entire screen.
    - [x] Have a shadow to show that it is a pop-up.
    - [x] Appear floating on the screen.
    - [x] The backdrop should appear darker or in a different shade.

- [x] **Like Playlists**
  - [x] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [x] When the heart icon is clicked:
    - [x] If previously unliked:
      - [x] The like count on the playlist tile should increase by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [x] If previously liked:
      - [x] The like count on the playlist tile should decrease by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [x] a playlist with a like count of 0
      - [x] a playlist with a non-zero like count
        <div>
    <a href="https://www.loom.com/share/6a38accc764c46b78ddfbb3a324e1781">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/6a38accc764c46b78ddfbb3a324e1781">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6a38accc764c46b78ddfbb3a324e1781-dedad178d1732cf4-full-play.gif">
    </a>
  </div>

- [x] **Shuffle Songs**
  - [x] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [x] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once.
        <div>
    <a href="https://www.loom.com/share/8ef03c4c220c46489383347a69277256">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/8ef03c4c220c46489383347a69277256">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/8ef03c4c220c46489383347a69277256-0077fcc98390663b-full-play.gif">
    </a>
  </div>
  
- [x] **Featured Page**
  - [x] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [x] Playlist Image
    - [x] Playlist Name
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row. 
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once. 
  - [x] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons.
     <div>
    <a href="https://www.loom.com/share/7fc89382399a4160bc60552b2d57002f">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/7fc89382399a4160bc60552b2d57002f">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7fc89382399a4160bc60552b2d57002f-63f6bcee54dd6c2a-full-play.gif">
    </a>
  </div>

#### STRETCH FEATURES

- [x] **Add New Playlists**
  - [x] Allow users to create new playlists.
  - [x] Using a form, users can input playlist:
    - [x] Name
    - [x] Author
    - [x] Cover image
    - [x] Add one or more songs to the playlist, specifying the song's:
      - [x] Title
      - [x] Artist
  - [x] The resulting playlist should display in the grid view.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist.
    <div>
    <a href="https://www.loom.com/share/e2e3b4702b544e5ca22ef69b40a51d4e">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/e2e3b4702b544e5ca22ef69b40a51d4e">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e2e3b4702b544e5ca22ef69b40a51d4e-60c436b6efaaa199-full-play.gif">
    </a>
  </div>

- [x] **Edit Existing Playlists**
  - [x] Enable users to modify the details of existing playlists.
  - [x] Add an edit button to each playlist tile.
  - [x] Users can update the playlist:
    - [x] Name
    - [x] Author
    - [x] Songs
  - [x] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [x] Editing all of a playlist's features (name, creator, AND songs)
    - [x] Editing some of a playlist's features (name, creator, OR songs)
        <div>
    <a href="https://www.loom.com/share/05c2d8cc3252431fa9656c0f4241c53c">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/05c2d8cc3252431fa9656c0f4241c53c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/05c2d8cc3252431fa9656c0f4241c53c-0bd26a5f171f6fe0-full-play.gif">
    </a>
  </div>

- [x] **Delete Playlists**
  - [x] Add a delete button to each playlist tile within the grid view.
  - [x] When clicked, the playlist is removed from the playlist grid view.

- [x] **Search Functionality**
  - [x] Implement a search bar that allows users to filter playlists by:
    - [x] Name 
    - [x] Author
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search Button
    - [x] Clear Button
  - [x] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [x] Presses the Enter Key
    - [x] Clicks the Submit/Search Button 
  - [x] User can click the clear button. When clicked:
    - [x] All text in the text input field is deleted
    - [x] All playlists in the `data.json` file are displayed in a grid view
    - [ ] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [ ] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [ ] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications. 

- [x] **Sorting Options**
  - [x] Implement a drop-down or button options that allow users to sort the playlist by:
    - [x] Name (A-Z alphabetically)
    - [x] Number of likes (descending order)
    - [x] Date added (most recent to oldest, chronologically)
  - [x] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/c9fbad2504b3498497fb15a952872e7c">
      <p>Music Playlist Explorer - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/c9fbad2504b3498497fb15a952872e7c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/c9fbad2504b3498497fb15a952872e7c-b07f51985e28f79f-full-play.gif">
    </a>
  </div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discussed in the labs did prepare me to complete the assignment, specically labs like the book club lab which helped not only when form generating for the stretch features but also with adding in HTML elements through Javascript, making my HTML much cleaner for dynamic addition of playlists and songs. I felt a bit unprepared when it came to adding a new page, which was a bit confusing as I was not sure if my script.js would be able to figure out which event listeners were for which pages.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would focus on making my code cleaner, making sure that functions or methods that had to do with a specific feature we grouped together, likewise for CSS. I would have love to do more error-handling as I noticed a few places where error-handling would have been useful as well.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

In general, I believe I should have read ahead on the milestones to predict the functionality and plan my javascript accordingly. For the first few milestones I had hardcoded a lot of the information, which I later spent a lot of time reversing as we began to implement javascript.

### Open-source libraries used

- Add any links to open-source libraries used in your project.fhndluffgkklieeiiebvduekflnhdhgi

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
