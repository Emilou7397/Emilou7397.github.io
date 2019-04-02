// Everything OK?
console.log('OK');

// Gallery Animations

$('a').mouseenter(function()	{
    $(this).children('img').toggleClass('zoomed');
});

$('a').mouseleave(function()	{
    $(this).children('img').toggleClass('zoomed');
});

// Light Gallery
$('#gallery-1').lightGallery();

// Your Awesome Scripts

// Footer

// Get current year
var today = new Date();

// Store current year
var currYear = today.getFullYear();

// Display current year
$('.year').text(currYear);