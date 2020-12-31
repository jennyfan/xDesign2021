/*** Modal pop-up ***/

const body = document.getElementById("body");

// get array  of all panels on page, make it clickable
const panels = document.getElementsByClassName("box");
Array.from(panels).forEach(function(panel) {
    panel.addEventListener('click', openModal, false);
});

// Open panel by clicking on div
function openModal(e) {
    // get closest panel's ID (hacky fix for all clickable elements within box)
    var panel = e.target.closest('div.box').id;
    // console.log("opening " + panel);

    // get active modal
    var modal = document.getElementById("modal__" + panel);

    // first remove old classes + add new ones
    async function toggleAnimations() {
        modal.classList.remove('animate__slideOutDown');
        modal.classList.add('animate__zoomIn');
    }

    // then show it + hide body scrollbars
    toggleAnimations().then(() => {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    });
}

// get array of all close buttons
const closeBtns = document.getElementsByClassName("close");
Array.from(closeBtns).forEach(function(btn) {
    btn.addEventListener('click', closeModal, false);
});

// close modals with "x" span
function closeModal(e) {
    var panel = e.target.parentNode.id;
    // console.log("closing" + panel);

    var modal = document.getElementById(panel);

    // first remove old classes + add new ones
    async function toggleAnimations() {
        modal.classList.remove('animate__zoomIn');
        modal.classList.add('animate__slideOutDown');
    }

    // then hide it + show body scrollbars
    toggleAnimations().then(() => {
        modal.style.display = "none";
        body.style.overflow = "auto";
    });
    

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