//Changes background image for card based on file user uploads
document.getElementById('getval').addEventListener('change', readURL, true);

function readURL() {
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        document.getElementById('image-holder').style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}


//next and previous controllers for choosing card
//num of cards

var cards = ["card1.jpg", "card2.jpg", "card3.jpg", "card7.jpg", "card8.jpg", "card9.jpg", "card10.jpg", "card11.jpg"];
const max = cards.length;
var count = -1;

document.getElementById("next-image").addEventListener("click", nextImage, false);
document.getElementById("prev-image").addEventListener("click", prevImage, false);

function nextImage() {
    count += 1;
    if (count == max) {
        count = 0;
    }
    document.getElementById('image-holder').style.backgroundImage = "url(/images/" + cards[count] + ")";
    //set input field value
    document.getElementsByName("background_image").value = "/images/" + cards[count];

    sharedValues.image_url = "/images/" + cards[count];
    console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO" + document.getElementsByName("background_image").value)
}

function prevImage() {
    count -= 1;
    if (count < 0) {
        count = max - 1;
    }
    document.getElementById('image-holder').style.backgroundImage = "url(/images/" + cards[count] + ")";
    //set input field value
    document.getElementsByName("background_image").value = "/images/" + cards[count];

    sharedValues.image_url = "/images/" + cards[count];
}




//next and previous controllers for choosing songs
//num of cards

var songs = ["song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3", "song7.mp3", "song8.mp3", "song9.mp3", "song10.mp3", "song11.mp3", "BirthdaySong.mp3"];
const songmax = cards.length;
var songcount = -1;

document.getElementById("next-song").addEventListener("click", nextSong, false);
document.getElementById("prev-song").addEventListener("click", prevSong, false);



function nextSong() {
    songcount += 1;
    if (songcount == songmax) {
        songcount = 0;
    }
    document.getElementById('song').src = "/audio/" + songs[songcount];
    document.getElementById('songholder').load();

    //set input field value
    document.getElementsByName("audio_url").value = "/audio/" + songs[songcount];

    sharedValues.audio_url = "/audio/" + cards[count];

    console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO" + document.getElementsByName("audio_url").value)
}

function prevSong() {
    songcount -= 1;
    if (songcount < 0) {
        songcount = songmax - 1;
    }
    document.getElementById('song').src = "/audio/" + songs[songcount];
    document.getElementById('songholder').load();

    //set input field value
    document.getElementsByName("audio_url").value = "/audio/" + songs[songcount];

    sharedValues.audio_url = "/audio/" + cards[count];
}