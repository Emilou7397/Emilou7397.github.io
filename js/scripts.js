// Everything OK?
console.log('OK');

// Your Awesome Scripts

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