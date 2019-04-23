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

let voteimgs = ["/img/voter-drive-thumbnail.png", "/img/vote-poster.png", "/img/vote-buttons.png", "/img/vote-sm.png", "/img/vote-zine.png"];

let albumimgs = ["/img/album-cover-front.png", "/img/album-cover-back.png"];

let beeimgs = ["/img/bee-logo.png", "/img/bee-labels.png", "/img/bee-mockup1.png", "/img/bee-mockup2.png"];

let sparkimgs = ["/img/spark-graphics.png", "/img/spark-flyer.png", "/img/spark-poster.png", "/img/spark-sm.png", "/img/spark-16x9.png"];

let currimg = 0;

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
        currimg = (currimg + 1) % 2;
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", albumimgs[currimg]);
    }
    if (target == "work-detail-5"){
        if (e.currentTarget.classList[0] == "fwd") {
            currimg = (currimg + 1) % 5;
        }
        else {
            currimg = (currimg + 4) % 5;
        }
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", voteimgs[currimg]);
    }
    if (target == "work-detail-7"){
        if (e.currentTarget.classList[0] == "fwd") {
            currimg = (currimg + 1) % 4;
        }
        else {
            currimg = (currimg+ 3) % 4;
        }
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", beeimgs[currimg]);
    }
    if (target == "work-detail-8"){
        if (e.currentTarget.classList[0] == "fwd") {
            currimg = (currimg + 1) % 5;
        }
        else {
            currimg = (currimg + 4) % 5;
        }
        e.currentTarget.parentElement.children[1].children[0].setAttribute("src", sparkimgs[currimg]);
    }
});

$(".close").click(function(e) {
    let target = e.currentTarget.parentElement.getAttribute("id");

    if (target == "work-detail-4"){
        e.currentTarget.parentElement.children[1].children[1].children[0].setAttribute("src", albumimgs[0]);
    }
    if (target == "work-detail-5"){
        e.currentTarget.parentElement.children[1].children[1].children[0].setAttribute("src", voteimgs[0]);
    }
    if (target == "work-detail-7"){
        e.currentTarget.parentElement.children[1].children[1].children[0].setAttribute("src", beeimgs[0]);
    }
    if (target == "work-detail-8"){
        e.currentTarget.parentElement.children[1].children[1].children[0].setAttribute("src", sparkimgs[0]);
    }

    currimg = 0;
})

$(".prev").hover(function(e) {
    e.currentTarget.children[1].classList.toggle("hover");
})

$(".fwd").hover(function(e) {
    e.currentTarget.children[1].classList.toggle("hover");
})

// Footer

var today = new Date();

var currYear = today.getFullYear();

$('.year').text(currYear);