/*** Modal pop-up ***/

var body = document.getElementById("body");

// get the modal
var modal = document.getElementById("modal__panel1");

// Get the button that opens the modal
var btn = document.getElementById("btn__panel1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open panel
btn.onclick = function() {
    modal.style.display = "block";
    modal.classList.remove('animate__zoomOut');
    modal.classList.add('animate__zoomIn');
    body.style.overflow = "hidden";
}

// Closing with X
span.onclick = function() {
    // modal.classList.remove('animate__zoomIn');
    // modal.classList.add('animate__zoomOut');
    modal.style.display = "none";
    body.style.overflow = "auto";
}


/*** warping SVG ***/
const svg = document.getElementById('warping');
const warp = new Warp(svg);

warp.interpolate(4);
warp.transform(([ x, y ]) => [ x, y, y ]);

let offset = 0;
function animate()
{
    warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 64 + offset), oy ]);
    offset += 0.1;
    requestAnimationFrame(animate);
}

animate();