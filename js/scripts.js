// Everything OK?
console.log('OK');

// Your Awesome Scripts

// Gallery Filtering

$("button").click(function(e) {
    e.preventDefault();
    let filter = e.currentTarget.classList[0];
    let pieces = $("#gallery").children("a");
    let classes;
    let flag = false;
    $.each(pieces, function(piece) {
        classes = pieces[piece].classList;
        $.each(classes, function(clss) {
            if (classes[clss] == filter){
                flag = true;
            }
        })
        if (!flag) {
            pieces[piece].classList.add("hidden");
        }
        else {
            pieces[piece].classList.remove("hidden");
        }
        flag = false;
    });
})

// Work detail overlay

let voteimgs = ["/img/voter-drive-thumbnail.png", "/img/vote-buttons.png", "/img/vote-poster.png", "/img/vote-sm.png", "/img/vote-zine.png"];
let voteimgscurr = 0;

let albumimgs = ["/img/album-cover-front.png", "/img/album-cover-back.png", "/img/album-cover-full.png"];
let albumimgscurr = 0;

let beeimgs = ["/img/bee-logo.png", "/img/bee-labels.png"];
let beeimgscurr = 0;

$("#gallery a").click(function(e) {
    e.preventDefault();
    let c = e.currentTarget.classList[0][1];
    $(`#work-detail-${c}`).addClass("visible");
})

$(".close").click(function(e) {
    e.preventDefault();
    let overlay = e.currentTarget.parentElement.getAttribute("id");
    $(`#${overlay}`).removeClass("visible");
})

$(".multi-img").children("svg").click(function(e) {
    e.preventDefault();
    let target = e.currentTarget.parentElement.parentElement.getAttribute("id");
    if (target == "work-detail-4"){
        if (e.currentTarget.classList[0] == "fwd") {
            albumimgscurr = (albumimgscurr + 1) % 3;
        }
        else {
            albumimgscurr = (albumimgscurr + 2) % 3;
        }
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", albumimgs[albumimgscurr]);
    }
    if (target == "work-detail-5"){
        if (e.currentTarget.classList[0] == "fwd") {
            voteimgscurr = (voteimgscurr + 1) % 5;
        }
        else {
            voteimgscurr = (voteimgscurr + 4) % 5;
        }
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", voteimgs[voteimgscurr]);
    }
    if (target == "work-detail-6"){
        beeimgscurr = (beeimgscurr + 1) % 2;
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", beeimgs[beeimgscurr]);
    }
});

// Footer

var today = new Date();

var currYear = today.getFullYear();

$('.year').text(currYear);