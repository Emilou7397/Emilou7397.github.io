// Everything OK?
console.log('OK');

// Your Awesome Scripts

// Work detail overlay

$("#gallery a").click(function(e) {
    e.preventDefault();
    $("#work-detail").addClass("visible");
})

$("#work-detail").click(function(e) {
    e.preventDefault();
    $("#work-detail").removeClass("visible");
})

// Footer

var today = new Date();

var currYear = today.getFullYear();

$('.year').text(currYear);