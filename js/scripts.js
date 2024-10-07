var buttonLinks = document.getElementsByTagName("button");
var storiesLinks = document.getElementsByClassName("stories-item");
var photoLinks = document.querySelectorAll(".photo-post img");

elSelector(buttonLinks);
elSelector(storiesLinks);
elSelector(photoLinks);

/*for (let i = 0; i < buttonLinks.length; i++) {
    buttonLinks[i].addEventListener("click", interativeClick);
};

for (let j = 0; j < storiesLinks.length; j++) {
    storiesLinks[j].style.cursor = "pointer";
    storiesLinks[j].addEventListener("click", interativeClick);
};

for (let k = 0; k < photoLinks.length; k++) {
    photoLinks[k].style.cursor = "pointer";
    photoLinks[k].addEventListener("click", interativeClick);
};*/

function interativeClick() {
    document.location.href = "https://www.instagram.com";
};

function elSelector(el) {
    for (let i = 0; i < el.length; i++) {
        el[i].style.cursor = "pointer";
        el[i].addEventListener("click", interativeClick);
    }
}