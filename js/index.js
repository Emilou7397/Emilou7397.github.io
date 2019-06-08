// BEHAVIOR

// Make stuff
function Main() {
  return (
    React.createElement("main", null,
    React.createElement(Header, null),
    React.createElement(Gallery, null),
    React.createElement(ContactAbout, null),
    React.createElement(Footer, null)));


}

function Header() {
  return (
    React.createElement("header", null,
    React.createElement("img", { src: "img/logo.png", alt: "header image", alt: "logo" }),

    React.createElement("a", { class: "worklink", href: "" }, "Work",
    React.createElement("svg", null, 
    React.createElement("line", { class: "inactive", x1: "2.5", y1: "2.5", x2: "37", y2: "2.5" }))),

    React.createElement("a", { class: "aboutlink", href: "" }, "About",
    React.createElement("svg", null, 
    React.createElement("line", { class: "inactive", x1: "2.5", y1: "2.5", x2: "44", y2: "2.5" }))),

    React.createElement("a", { class: "contactlink", href: "" }, "Contact",
    React.createElement("svg", null, 
    React.createElement("line", { class: "inactive", x1: "2.5", y1: "2.5", x2: "56", y2: "2.5" }))),

    React.createElement("a", { class: "github", href: "https://github.com/Emilou7397", target: "_blank" },
    React.createElement("img", {
      src: "img/github.png",
      alt: "" })),

    React.createElement("a", { class: "codepen", href: "https://codepen.io/econe/", target: "_blank" },
    React.createElement("img", {
      src: "img/codepen.png",
      alt: "" })),

    React.createElement("a", { class: "instagram", href: "https://www.instagram.com/weird.by.design/", target: "_blank" },
    React.createElement("img", {
      src: "img/instagram.png",
      alt: "" }))));
}

function Gallery() {
  return (
    React.createElement("section", { id: "gallery" },
    React.createElement("a", { id: "work1", class: "work", href: "workdetail.html#!0" },
    React.createElement("img", { src: "img/google-doodle-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Google Doodle"))),


    React.createElement("a", { id: "work2", class: "work", href: "workdetail.html#!1" },
    React.createElement("img", { src: "img/poster-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Circus Poster"))),


    React.createElement("a", { id: "work3", class: "work", href: "workdetail.html#!2" },
    React.createElement("img", { src: "img/bee-mockup1.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Benson's Ethical Eats"))),


    React.createElement("a", { id: "work4", class: "work", href: "workdetail.html#!3" },
    React.createElement("img", { src: "img/album-cover-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Summer of '81"))),


    React.createElement("a", { id: "work5", class: "work", href: "workdetail.html#!4" },
    React.createElement("img", { src: "img/spark-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Spark Central"))),


    React.createElement("a", { id: "work6", class: "work", href: "workdetail.html#!5" },
    React.createElement("img", { src: "img/game-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "Browser-based I Spy"))),


    React.createElement("a", { id: "work7", class: "work", href: "workdetail.html#!6" },
    React.createElement("img", { src: "img/ny-cover-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "New Yorker Cover"))),


    React.createElement("a", { id: "work8", class: "work", href: "workdetail.html#!7" },
    React.createElement("img", { src: "img/voter-drive-thumbnail.png", alt: "" }),
    React.createElement("div", { class: "overlay" },
    React.createElement("h2", null, "EWU 2018 Voting Drive")))));




}

function ContactAbout() {
  return (
    React.createElement("section", { id: "contactabout" },
    React.createElement(About, null),
    React.createElement(Contact, null)
  ));
}

function About() {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("h1", null, "About Me"),
    React.createElement("p", null, "Hello! I'm Emily: a girl with an eclectic collection of interests."),

    React.createElement("p", null, "For my first two years of college, I was a computer science major who thought she wanted to be a game developer. I was minoring in 3D animation and game design. It wasn't until junior year that I took a design course and changed my major three weeks into the quarter. Now, I look back and wonder how I ever didn't know I was a designer."),

    React.createElement("p", null, "So here I am, a designer with a bit of programmer in her. I also still have some of that love for games, but I've realized that the part of game development I actually wanted to do all along was the animation and design. That being said, my favorite projects are interactive SVG animations using HTML, CSS, and JavaScript."),

    React.createElement("p", null, "I also enjoy illustration now that I've found my style and gotten comfortable with Procreate. You can see more examples of my illustration work on Instagram."),

    React.createElement("p", null, "Oh, and as for my \"eclectic collection of interests,\" I'm a fan of retro fashion, I collect teapots, and if you ask me about my cats, I'll talk about them forever."),

    React.createElement("p", null, "You can view my resume",
    " ",
    React.createElement("a", { href: "files/emily-cone_hire-me.pdf", target: "_blank" }, "here."))));
}

function Contact() {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("section", { class: "top" },
    React.createElement("h1", null, "Contact"),
    React.createElement("p", null, "Interested in hiring me? Need freelance work done? Just have a question? Fill out the form and I'll get back to you, or use my contact info on the right.")),

    React.createElement("form", {
      class: "left",
      action: "https://formspree.io/emily.cone@weird-by.design",
      method: "POST" },

    React.createElement("section", { class: "field name" },
    React.createElement("label", { for: "name" },
    React.createElement("h2", null, "Name")),

    React.createElement("input", { type: "text", name: "name" })),

    React.createElement("section", { class: "field email" },
    React.createElement("label", { for: "_replyto" },
    React.createElement("h2", null, "Email")),

    React.createElement("input", { type: "email", name: "_replyto" })),

    React.createElement("section", { class: "field message" },
    React.createElement("label", { for: "comments" },
    React.createElement("h2", null, "Message")),

    React.createElement("textarea", { name: "comments", id: "", cols: "30", rows: "10" })),

    React.createElement("div", { class: "button-wrapper" },
    React.createElement("input", { type: "submit", value: "Submit" })),

    React.createElement("input", { type: "hidden", name: "_next", value: "/" })),

    React.createElement("section", { class: "right" },
    React.createElement("h2", null, "Phone"),
    React.createElement("p", null, "Due to spam calls, I often screen unfamiliar numbers. If I don't answer, please leave a message!"),

    React.createElement("p", null, "208.790.1552"),
    React.createElement("h2", null, "Email"),
    React.createElement("p", null, "emily.cone@weird-by.design"),
    React.createElement("p", null, "emily.cone.work@gmail.com"),
    React.createElement("h2", null, "Social Media"),
    React.createElement("a", { class: "github", href: "https://github.com/Emilou7397", target: "_blank" },
    React.createElement("img", {
      src: "https://github.com/Emilou7397/Emilou7397.github.io/blob/master/img/github.png?raw=true",
      alt: "" })),

    React.createElement("a", { class: "codepen", href: "https://codepen.io/econe/", target: "_blank" },
    React.createElement("img", {
      src: "https://github.com/Emilou7397/Emilou7397.github.io/blob/master/img/codepen.png?raw=true",
      alt: "" })),

    React.createElement("a", { class: "instagram", href: "https://www.instagram.com/weird.by.design/", target: "_blank" },
    React.createElement("img", {
      src: "https://github.com/Emilou7397/Emilou7397.github.io/blob/master/img/instagram.png?raw=true",
      alt: "" })))));
}

// Get current year for footer

var today = new Date();
var currYear = today.getFullYear();

function Footer() {
  return (
    React.createElement("footer", null,
    React.createElement("p", { class: "detail" }, "\xA9 Copyright 1997 - ", currYear),
    React.createElement("p", null , "Hey, you made it to the bottom! Congrats!")));
};

// Show stuff
ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));

// Behavior

$(".work > .overlay").hover(function (e) {
  let target = e.target.classList.toggle("overlayhover");
});

$("header > .worklink").click(function (e) {
  e.preventDefault();
  var elmnt = document.getElementById("gallery");
  elmnt.scrollIntoView();
});

$("header > .aboutlink").click(function (e) {
  e.preventDefault();
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
});

$("header > .contactlink").click(function (e) {
  e.preventDefault();
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView();
});

$('.worklink').hover(function(e) {
	e.currentTarget.children[0].children[0].classList.toggle("inactive");
});

$('.aboutlink').hover(function(e) {
	e.currentTarget.children[0].children[0].classList.toggle("inactive");
});

$('.contactlink').hover(function(e) {
	e.currentTarget.children[0].children[0].classList.toggle("inactive");
});

$('.github').hover(function(e) {
  e.currentTarget.children[0].classList.toggle('hover');
});

$('.codepen').hover(function(e) {
  e.currentTarget.children[0].classList.toggle('hover');
});

$('.instagram').hover(function(e) {
  e.currentTarget.children[0].classList.toggle('hover');
})
