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

$("#gallery a").click(function(e) {
    e.preventDefault();
    let c = e.currentTarget.classList[0][1];
    $(`#work-detail-${c}`).addClass("visible");
})

$(".work-detail").click(function(e) {
    e.preventDefault();
    let overlay = e.currentTarget.getAttribute("id");
    $(`#${overlay}`).removeClass("visible");
})

// Footer

var today = new Date();

var currYear = today.getFullYear();

$('.year').text(currYear);