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

let voteimgs = ["/img/vote-buttons.png", "/img/vote-poster.png", "/img/vote-sm.png", "/img/vote-zine.png"];

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
    if (target == "work-detail-5"){
        console.log(voteimgs);
    }
});

// Footer

var today = new Date();

var currYear = today.getFullYear();

$('.year').text(currYear);