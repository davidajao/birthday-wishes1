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
const max = 11;
var cards = ["card1.jpg", "card2.jpg", "card3.jpg", "card4.jpg", "card5.jpg", "card6.jpg", "card7.jpg", "card8.jpg", "card9.jpg", "card10.jpg", "card11.jpg"];
var count = -1;

document.getElementById("next-image").addEventListener("click", nextImage, false);
document.getElementById("prev-image").addEventListener("click", prevImage, false);

function nextImage() {
    count += 1;
    if (count == max) {
        count = 0;
    }
    document.getElementById('image-holder').style.backgroundImage = "url(/images/" + cards[count] + ")";
}

function prevImage() {
    count -= 1;
    if (count < 0) {
        count = max - 1;
    }
    document.getElementById('image-holder').style.backgroundImage = "url(/images/" + cards[count] + ")";
}




















dragElement(document.getElementsByClassName("cloud"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementsByClassName("shadow")) {
        // if present, the header is where you move the DIV from:
        document.getElementsByClassName("shadow").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}